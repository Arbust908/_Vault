# Vue 3 Core Internals — A Senior/Staff Engineering Learning Guide

**TL;DR**
- Vue 3's source code (vuejs/core, main branch as of May 2026 — currently at **v3.6.0-beta.12, released May 15, 2026**, with **v3.5.34** as the latest stable line) is one of the best industrial-grade case studies of CS fundamentals applied in production: a Proxy-based Observer system rewritten in 3.4/3.6 around a doubly-linked-list signal graph (ported from Johnson Chu's `alien-signals`), a LIS-based keyed list diff in `patchKeyedChildren`, a compiler pipeline with bit-flag-driven optimization (`PatchFlags`, `ShapeFlags`), a microtask-batched priority queue scheduler, and now Vapor Mode — a no-VDOM compile target.
- Map the codebase to interview topics this way: `@vue/reactivity` = Observer + Proxy + WeakMap-keyed dependency graph; `@vue/runtime-core` = Strategy (custom renderer), Factory (`createRenderer`/`createApp`), LIS/greedy + binary search in the diff; `@vue/compiler-core` = classic 3-phase compiler (parse → transform → codegen) with static hoisting and bitmasked patch flags; Vapor = the "what if we moved diffing to compile time?" thought experiment, shipped.
- For interview prep, the highest-leverage reading targets are six files: `packages/reactivity/src/{effect.ts, dep.ts, baseHandlers.ts, ref.ts}`, `packages/runtime-core/src/{renderer.ts, scheduler.ts}` — together about 4–5k LOC that demonstrate every pattern below.

---

## Key Findings

1. **The reactivity system is not "just Proxies."** The Proxy is the *interception* layer; the actual dependency graph is a `WeakMap<target, Map<key, Dep>>` (`targetMap` in `dep.ts`), and since Vue 3.6's port of alien-signals, each `Dep`↔`Subscriber` relationship is stored as a node in a doubly-linked list (the `Link` interface). This is the answer to "design a reactive state system" interview questions.

2. **The keyed list diff (`patchKeyedChildren` in `renderer.ts`) is Vue's CS centerpiece.** It uses a 5-phase algorithm: pre-trim common prefix, post-trim common suffix, mount-only / unmount-only fast paths, and finally a `newIndexToOldIndexMap` + `getSequence()` Longest Increasing Subsequence (patience-sort with binary search, O(n log n)) to compute the *minimum set of DOM moves*.

3. **The compiler is the unsung performance hero.** `PatchFlags` (bitmask, 16 values from `TEXT=1` to `HOISTED=-1`) and `ShapeFlags` are how Vue beats a naive VDOM at runtime — the diff function reads these flags and skips entire branches. This is "encode static knowledge at compile time" applied to UI.

4. **Vapor Mode is the explicit acknowledgment that VDOM is overhead Vue no longer needs.** When the compiler can statically determine the reactive dependencies of each DOM node, the runtime can compile directly to imperative DOM updates and skip VNode allocation entirely.

5. **The scheduler is a deduplicated, id-sorted priority queue flushed on `Promise.resolve().then()`** — not a sophisticated topological sort, but a simple monotonic-id ordering that exploits the fact that parents are created before children, so smaller `uid` ⇒ parent ⇒ flush first.

---

## Details

### 1. `@vue/reactivity` — The Observer Pattern, Done Industrially

**Key files (paths inside `vuejs/core/packages/reactivity/src/`):** `reactive.ts`, `ref.ts`, `effect.ts`, `dep.ts`, `computed.ts`, `baseHandlers.ts`, `collectionHandlers.ts`, `constants.ts`, `effectScope.ts`, `watch.ts`, `arrayInstrumentations.ts`.

#### 1.1 The data structures

```ts
// packages/reactivity/src/dep.ts  (conceptual shape)
const targetMap = new WeakMap<object, Map<any, Dep>>()
```

- **`WeakMap`** keyed by raw target object → when the raw object is GC'd, its dep map goes with it. *Interview note: this is the textbook use case for WeakMap — memory-safe associations keyed by external object identity.*
- **`Map`** keyed by property key (string/symbol). Special keys: `ITERATE_KEY`, `ARRAY_ITERATE_KEY`, `MAP_KEY_ITERATE_KEY` (`Symbol()` instances) for tracking iteration and `.size`.
- **`Dep`** — historically a `Set<ReactiveEffect>`. **Since the Vue 3.4 refactor (PR #10397, Evan You) and the 3.6 alien-signals port (PR #12349, Johnson Chu),** `Dep` is now a node in a doubly-linked list of `Link` objects, each holding `{ dep, sub, prevDep, nextDep, prevSub, nextSub }`. This eliminates per-trigger Set allocations and lets effects un-subscribe in O(1) when they re-run.

```ts
// post-3.6 shape (ported from alien-signals)
interface Link {
  dep: Dep
  sub: Subscriber
  prevDep: Link | undefined
  nextDep: Link | undefined
  prevSub: Link | undefined
  nextSub: Link | undefined
}
```

#### 1.2 `ReactiveEffect` — the Subscriber

```ts
// packages/reactivity/src/effect.ts
export enum EffectFlags {
  ACTIVE = 1 << 0, RUNNING = 1 << 1, TRACKING = 1 << 2,
  NOTIFIED = 1 << 3, DIRTY = 1 << 4, ALLOW_RECURSE = 1 << 5,
  PAUSED = 1 << 6, EVALUATED = 1 << 7,
}

export class ReactiveEffect<T> implements Subscriber {
  deps?: Link = undefined        // head of dep-link list
  depsTail?: Link = undefined    // tail (used during run() to drop stale links)
  flags = EffectFlags.ACTIVE | EffectFlags.TRACKING
  next?: Subscriber              // intrusive linked list for the batch queue
  scheduler?: EffectScheduler
  constructor(public fn: () => T) { /* push onto activeEffectScope */ }
  run() { /* set activeSub = this, call fn, clean stale deps */ }
  notify() { /* enqueue into batch */ }
}
```

The `flags` field uses **bit flags** (the same pattern as Linux `task_struct->flags`, React fibers) — one numeric field instead of a struct of booleans, atomic transitions via `|=` / `&= ~`.

#### 1.3 `track()` and `trigger()` — the algorithm

```ts
function track(target, type, key) {
  if (!activeSub || !shouldTrack) return
  let depsMap = targetMap.get(target)
  if (!depsMap) targetMap.set(target, (depsMap = new Map()))
  let dep = depsMap.get(key)
  if (!dep) depsMap.set(key, (dep = new Dep()))
  dep.track()  // post-3.6: links dep <-> activeSub into both linked lists
}

function trigger(target, type, key, newValue, oldValue) {
  const depsMap = targetMap.get(target); if (!depsMap) return
  startBatch()
  depsMap.get(key)?.trigger()       // post-3.6: increments dep.version, walks sub list
  // for ADD/DELETE/CLEAR: also walk depsMap.get(ITERATE_KEY) etc.
  endBatch()                         // flushes batched notifications once at the end
}
```

**Post-3.4 batching (`startBatch`/`endBatch`) means multiple sets to the same dep within a synchronous block trigger subscribers only once.** This is why `arr.splice()` no longer fires N effects.

**Post-3.6 version counting (`Dep.version`)** lets `computed` skip recomputation when an upstream dep "changed" but the value reverted before the computed was read — classic push-pull / "glitch-free" signal semantics, same idea as Preact Signals and S.js.

#### 1.4 `reactive()`, `ref()`, `computed()`

```ts
// packages/reactivity/src/reactive.ts
const reactiveMap = new WeakMap<Target, any>()
export function reactive(target) {
  if (isReadonly(target)) return target
  return createReactiveObject(target, false, mutableHandlers,
                              mutableCollectionHandlers, reactiveMap)
}
```

There are **four parallel WeakMaps** caching proxies: `reactiveMap`, `shallowReactiveMap`, `readonlyMap`, `shallowReadonlyMap`. Calling `reactive(obj)` twice returns the same proxy.

```ts
// packages/reactivity/src/ref.ts (essence)
class RefImpl<T> {
  _value: T; _rawValue: T
  dep: Dep = new Dep()
  readonly [ReactiveFlags.IS_REF] = true
  constructor(value, public readonly __v_isShallow: boolean) {
    this._rawValue = __v_isShallow ? value : toRaw(value)
    this._value = __v_isShallow ? value : toReactive(value)
  }
  get value() { this.dep.track(); return this._value }
  set value(newVal) {
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal
      this._value = this.__v_isShallow ? newVal : toReactive(newVal)
      this.dep.trigger()
    }
  }
}
```

A `ref` is just a tiny one-property reactive container — its own `Dep`, keyed by `'value'`. No `targetMap` entry. This is why `ref` is cheaper than `reactive({value: ...})`.

`computed()` is a `ReactiveEffect` + `RefImpl` hybrid: it acts as a *subscriber* to its inputs and a *dep* to its consumers (a node with both `deps` and `subs` linked lists). Lazy: `get value()` only runs the getter if `flags & DIRTY`.

#### 1.5 Proxy handlers — `baseHandlers.ts` and `collectionHandlers.ts`

`packages/reactivity/src/baseHandlers.ts` (264 lines) defines a **class hierarchy**:

```ts
class BaseReactiveHandler implements ProxyHandler<Target> {
  constructor(protected readonly _isReadonly = false,
              protected readonly _isShallow = false) {}
  get(target, key, receiver) {
    if (key === ReactiveFlags.SKIP) return target[ReactiveFlags.SKIP]
    if (key === ReactiveFlags.IS_REACTIVE) return !this._isReadonly
    if (key === ReactiveFlags.IS_READONLY) return this._isReadonly
    if (key === ReactiveFlags.IS_SHALLOW)  return this._isShallow
    if (key === ReactiveFlags.RAW) { /* identity check against proxy map */ return target }
    // ...array instrumentation, Reflect.get, track(), ref unwrap, recursive wrap
  }
}
class MutableReactiveHandler extends BaseReactiveHandler { /* + set, deleteProperty, has, ownKeys */ }
class ReadonlyReactiveHandler extends BaseReactiveHandler { /* set/delete warn + no-op */ }

export const mutableHandlers         = new MutableReactiveHandler()
export const readonlyHandlers        = new ReadonlyReactiveHandler()
export const shallowReactiveHandlers = new MutableReactiveHandler(true)  // _isShallow=true
export const shallowReadonlyHandlers = new ReadonlyReactiveHandler(true)
```

So the four flavors **share one code path** parametrized by two booleans (`_isReadonly`, `_isShallow`) on the handler instance — a textbook use of constructor parameters to specialize behavior without separate classes. The four flags themselves are string-literal members of `ReactiveFlags` in `packages/reactivity/src/constants.ts`:

```ts
export enum ReactiveFlags {
  SKIP        = '__v_skip',
  IS_REACTIVE = '__v_isReactive',
  IS_READONLY = '__v_isReadonly',
  IS_SHALLOW  = '__v_isShallow',
  RAW         = '__v_raw',
  IS_REF      = '__v_isRef',
}
```

**`collectionHandlers.ts`** (329 lines) is *only* a `get` trap, because Map/Set methods (`set`, `add`, `delete`, `has`, `forEach`, iterators, `size`) cannot be intercepted by Proxy traps — they invoke internal slots that bypass the Proxy. Instead, Vue uses `createInstrumentations(readonly, shallow)` to build a method table that *replaces* the native methods. Iterators are built by `createIterableMethod` walking `['keys','values','entries', Symbol.iterator]`. Readonly variants use `createReadonlyMethod(type)` that warns in dev and returns a no-op (`false` for `delete`, `this` for `add`/`set`). The four exports are `mutableCollectionHandlers`, `shallowCollectionHandlers`, `readonlyCollectionHandlers`, `shallowReadonlyCollectionHandlers`, each just `{ get: createInstrumentationGetter(isReadonly, shallow) }`.

#### 1.6 Scheduler & `nextTick`

`packages/runtime-core/src/scheduler.ts` (lives in runtime-core, not reactivity):

```ts
const queue: SchedulerJob[] = []
const resolvedPromise = Promise.resolve()
let currentFlushPromise: Promise<void> | null = null

export function queueJob(job) {
  if (job.flags & SchedulerJobFlags.QUEUED) return
  const jobId = getId(job)
  const lastJob = queue[queue.length - 1]
  if (!lastJob || (!(job.flags & SchedulerJobFlags.PRE) && jobId >= getId(lastJob))) {
    queue.push(job)                          // fast path — tail append
  } else {
    queue.splice(findInsertionIndex(jobId), 0, job)  // binary-search insert
  }
  job.flags |= SchedulerJobFlags.QUEUED
  queueFlush()
}
function queueFlush() {
  if (!currentFlushPromise) currentFlushPromise = resolvedPromise.then(flushJobs)
}
```

Properties of this scheduler:
- **Deduplicated:** `QUEUED` flag stops repeat enqueues.
- **Ordered by `job.id`** (which for component-update jobs is the component's `uid`, a monotonically-increasing counter at instance creation). Parents have smaller uid → parents flush first → if a parent unmounts a child, the child's job is invalidated and skipped (`invalidateJob`).
- **Three sub-queues:** `queue` (main, sorted ascending), `pendingPostFlushCbs` (post — for `mounted`, `updated`, `watch({flush: 'post'})`), and pre-flush callbacks (`watch({flush: 'pre'})`).
- **`nextTick(fn)`** is literally `(currentFlushPromise || resolvedPromise).then(fn)` — your callback runs after the current flush batch finishes, *after* the DOM has been updated.

### 2. `@vue/runtime-core` — VNodes, the Renderer, and the LIS Diff

#### 2.1 The VNode shape (`packages/runtime-core/src/vnode.ts`)

```ts
export interface VNode<HostNode = RendererNode, HostElement = RendererElement> {
  __v_isVNode: true
  __v_skip: true              // marks as non-reactive
  type: VNodeTypes             // string tag | Component object | Fragment | Text | Suspense | Teleport
  props: (VNodeProps & Record<string, any>) | null
  key: string | number | symbol | null
  ref: VNodeNormalizedRef | null
  scopeId: string | null
  slotScopeIds: string[] | null
  children: VNodeNormalizedChildren
  component: ComponentInternalInstance | null   // set when type is a component
  dirs: DirectiveBinding[] | null
  transition: TransitionHooks<HostElement> | null

  // DOM references
  el: HostNode | null
  anchor: HostNode | null      // fragment anchor / teleport target
  target: HostElement | null   // teleport target
  targetAnchor: HostNode | null
  staticCount: number

  // suspense
  suspense: SuspenseBoundary | null
  ssContent: VNode | null
  ssFallback: VNode | null

  // optimization
  shapeFlag: number            // bitmask — ELEMENT|COMPONENT|TEXT_CHILDREN|...
  patchFlag: number            // bitmask — TEXT|CLASS|STYLE|PROPS|...
  dynamicProps: string[] | null
  dynamicChildren: (VNode[] & { hasOnce?: boolean }) | null  // block tree
  appContext: AppContext | null
  ctx: ComponentInternalInstance | null
  memo?: any[]                 // v-memo cache
  cacheIndex?: number
  ce?: (instance: ComponentInternalInstance) => void  // custom element hook
}
```

**`createVNode()` vs `h()`:**
- `h()` (in `h.ts`) is the **public, user-friendly factory** with overloads — accepts `(type)`, `(type, props)`, `(type, children)`, `(type, props, children)` — and normalizes children/props.
- `createVNode()` is the **internal/compiler-emitted factory** with a fixed positional signature: `(type, props, children, patchFlag, dynamicProps, isBlockNode)`. Compiler output calls `createVNode` directly (sometimes the renamed-for-tree-shake aliases `createElementVNode`, `createBlock`, `createElementBlock`).

`createBlock` / `openBlock()` / `closeBlock()` implement the **block tree** — a flat `dynamicChildren` array attached to each "block root" (the root of a component, of a `v-if` branch, or of a `v-for` fragment) containing only the dynamically-bound descendants. When patching, the renderer can walk `dynamicChildren` directly and skip the static tree entirely.

#### 2.2 `ShapeFlags` (`packages/shared/src/shapeFlags.ts`)

```ts
export enum ShapeFlags {
  ELEMENT                       = 1,
  FUNCTIONAL_COMPONENT          = 1 << 1,   // 2
  STATEFUL_COMPONENT            = 1 << 2,   // 4
  TEXT_CHILDREN                 = 1 << 3,   // 8
  ARRAY_CHILDREN                = 1 << 4,   // 16
  SLOTS_CHILDREN                = 1 << 5,   // 32
  TELEPORT                      = 1 << 6,   // 64
  SUSPENSE                      = 1 << 7,   // 128
  COMPONENT_SHOULD_KEEP_ALIVE   = 1 << 8,   // 256
  COMPONENT_KEPT_ALIVE          = 1 << 9,   // 512
  COMPONENT                     = STATEFUL_COMPONENT | FUNCTIONAL_COMPONENT,  // 6
}
```

#### 2.3 `PatchFlags` (`packages/shared/src/patchFlags.ts`) — the complete list

```ts
export enum PatchFlags {
  TEXT             = 1,        // dynamic textContent
  CLASS            = 1 << 1,   // 2  — dynamic :class
  STYLE            = 1 << 2,   // 4  — dynamic :style
  PROPS            = 1 << 3,   // 8  — has dynamic non-class/style props; pair with dynamicProps[]
  FULL_PROPS       = 1 << 4,   // 16 — keys may change (v-bind="obj"); full diff
  NEED_HYDRATION   = 1 << 5,   // 32 — has event listeners that must be attached during SSR hydration
  STABLE_FRAGMENT  = 1 << 6,   // 64 — child order never changes (e.g. v-for over a literal range)
  KEYED_FRAGMENT   = 1 << 7,   // 128 — keyed v-for fragment → use patchKeyedChildren
  UNKEYED_FRAGMENT = 1 << 8,   // 256 — unkeyed v-for fragment → patchUnkeyedChildren
  NEED_PATCH       = 1 << 9,   // 512 — non-props patch hooks (ref, directives, transitions)
  DYNAMIC_SLOTS    = 1 << 10,  // 1024 — has dynamic slot names
  DEV_ROOT_FRAGMENT= 1 << 11,  // 2048 — dev-only template-root fragment around comments
  CACHED           = -1,       // special — render result is cached (v-once / v-memo)
  BAIL             = -2,       // bail out of optimized mode — fall back to full diff
  HOISTED          = -1,       // (re-used) marks statically hoisted vnodes
}
```

Combinable with `|`, checked with `&`. **`STABLE_FRAGMENT` and `HOISTED` are the entry points for static hoisting** — the compiler emits hoisted vnodes once at module scope and the diff skips them entirely.

#### 2.4 `patch()` — the polymorphic dispatch (`renderer.ts`)

```ts
const patch = (n1, n2, container, anchor=null, parentComponent=null, ...) => {
  if (n1 && !isSameVNodeType(n1, n2)) { unmount(n1, ...); n1 = null }
  if (n2.patchFlag === PatchFlags.BAIL) { optimized = false; n2.dynamicChildren = null }
  const { type, ref, shapeFlag } = n2
  switch (type) {
    case Text:      processText(n1, n2, container, anchor); break
    case Comment:   processCommentNode(...); break
    case Static:    if (n1 == null) mountStaticNode(...); break
    case Fragment:  processFragment(...); break
    default:
      if (shapeFlag & ShapeFlags.ELEMENT)         processElement(...)
      else if (shapeFlag & ShapeFlags.COMPONENT)  processComponent(...)
      else if (shapeFlag & ShapeFlags.TELEPORT)   (type as typeof TeleportImpl).process(...)
      else if (shapeFlag & ShapeFlags.SUSPENSE)   (type as typeof SuspenseImpl).process(...)
  }
}
```

`isSameVNodeType(n1, n2)` is `n1.type === n2.type && n1.key === n2.key`. **This is why `:key` matters.**

#### 2.5 `patchKeyedChildren` — the LIS diff (the algorithm interview gold)

Located in `renderer.ts`. Five sequential phases:

**Phase 1 — sync from start.** Walk `i` from 0 forward while `isSameVNodeType(c1[i], c2[i])`, patch in place. Stop at first mismatch.

**Phase 2 — sync from end.** Walk `e1` (old end) and `e2` (new end) backwards while `isSameVNodeType(c1[e1], c2[e2])`. Stop at first mismatch.

**Phase 3 — common sequence + mount.** If `i > e1 && i <= e2`: pure additions at `[i..e2]`. Patch each as new.

**Phase 4 — common sequence + unmount.** If `i > e2 && i <= e1`: pure removals at `[i..e1]`.

**Phase 5 — the hard case (unknown sequence with reorders).** Build `keyToNewIndexMap: Map<key, newIdx>` for `[i..e2]`. Walk old children `[i..e1]`:
- For each old child, look up its new index in `keyToNewIndexMap`.
- If not found → unmount.
- Otherwise: patch in place, record `newIndexToOldIndexMap[newIdx - i] = oldIdx + 1` (the `+1` is so that `0` can mean "no old, mount fresh"), and set `moved = true` if the new indices encountered are not monotonically increasing.

Then, **if `moved`**, compute `getSequence(newIndexToOldIndexMap)` — the LIS of the array. Walk new children backwards from `e2 → i`:
- If `newIndexToOldIndexMap[idx] === 0` → mount.
- Else if current new index is *not* in the LIS → `move(child, container, anchor, MoveType.REORDER)`.
- Else → no move (it's already in the right relative position).

The `getSequence` function in `renderer.ts` is **patience sorting with binary search, O(n log n)**, returning the *indices* (not values) of the LIS:

```ts
// renderer.ts — getSequence implementation
function getSequence(arr: number[]): number[] {
  const p = arr.slice()           // predecessor array
  const result = [0]              // indices of the current LIS
  let i, j, u, v, c
  const len = arr.length
  for (i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {              // 0 means "new node, mount"
      j = result[result.length - 1]
      if (arr[j] < arrI) { p[i] = j; result.push(i); continue }
      u = 0; v = result.length - 1
      while (u < v) {              // binary search for replacement
        c = (u + v) >> 1
        if (arr[result[c]] < arrI) u = c + 1; else v = c
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) p[i] = result[u - 1]
        result[u] = i
      }
    }
  }
  // walk predecessors back to reconstruct
  u = result.length; v = result[u - 1]
  while (u-- > 0) { result[u] = v; v = p[v] }
  return result
}
```

This is the **textbook patience-sort LIS algorithm**, the same `O(n log n)` solution to LeetCode 300. Why LIS guarantees minimum moves: indices already in increasing order are in the right relative position and need no move; everything else must be moved into place — minimizing moves ≡ maximizing the no-move set ≡ finding the LIS.

#### 2.6 `ComponentInternalInstance` — what's actually on the instance

`packages/runtime-core/src/component.ts` (~60 properties, summary):

```ts
interface ComponentInternalInstance {
  uid: number                          // monotonic ID — drives scheduler ordering
  type: ConcreteComponent              // the component definition
  parent: ComponentInternalInstance | null
  root: ComponentInternalInstance
  appContext: AppContext               // app() + provides + config

  vnode: VNode                         // the placeholder vnode rendered by parent
  next: VNode | null                   // pending next vnode (for updates)
  subTree: VNode                       // the rendered tree
  effect: ReactiveEffect               // the render effect
  update: () => void                   // effect.run, queued via scheduler
  job: SchedulerJob

  // state
  scope: EffectScope                   // owns all effects spawned in setup
  render: InternalRenderFunction | null
  proxy: ComponentPublicInstance | null   // the `this` exposed to template/options
  exposed: Record<string, any> | null  // defineExpose
  withProxy: ComponentPublicInstance | null
  provides: Record<string | symbol, any>
  ids: [string, number, number]        // useId

  // resolved options/caches
  propsOptions: NormalizedPropsOptions
  emitsOptions: ObjectEmitsOptions | null
  accessCache: Record<string, AccessTypes> | null  // numeric cache: SETUP/DATA/PROPS/CONTEXT

  // runtime state
  ctx: Data                            // dev-only-mutable, render context
  data: Data                           // options API data
  props: Data
  attrs: Data
  slots: InternalSlots
  refs: Data
  setupState: Data
  setupContext: SetupContext | null
  emit: EmitFn

  // lifecycle flags
  isMounted: boolean
  isUnmounted: boolean
  isDeactivated: boolean

  // lifecycle hook arrays, keyed by LifecycleHooks short codes
  bc, c, bm, m, bu, u, bum, um, da, a, rtg, rtc, ec, sp: Function[] | null

  suspense: SuspenseBoundary | null
  asyncDep: Promise<any> | null
  asyncResolved: boolean
}
```

Worth noting: **`accessCache`** is a per-property numeric cache (e.g. `SETUP = 0`, `DATA = 1`, `PROPS = 2`, `CONTEXT = 3`, `OTHER = 4`) on the public proxy — so after the first access, `this.foo` knows exactly which bucket to look in instead of testing each in turn. A classic "monomorphic dispatch" micro-optimization.

#### 2.7 `setupStatefulComponent()` and the component lifecycle

```ts
// component.ts
export function setupComponent(instance, isSSR=false) {
  const { props, children } = instance.vnode
  const isStateful = isStatefulComponent(instance)
  initProps(instance, props, isStateful, isSSR)
  initSlots(instance, children, optimized || isSSR)
  return isStateful ? setupStatefulComponent(instance, isSSR) : undefined
}

function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type as ComponentOptions
  // 1. create public proxy ($el, $data, $props, ...)
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers)
  // 2. if setup() exists: setCurrentInstance, pauseTracking, call setup(props, context)
  if (Component.setup) {
    const setupContext = createSetupContext(instance)   // { attrs, slots, emit, expose }
    setCurrentInstance(instance)
    pauseTracking()
    const setupResult = callWithErrorHandling(setup, instance, ErrorCodes.SETUP_FUNCTION,
                                              [instance.props, setupContext])
    resetTracking(); unsetCurrentInstance()
    handleSetupResult(instance, setupResult, isSSR)  // assigns proxyRefs(result) to setupState OR render fn
  } else {
    finishComponentSetup(instance, isSSR)             // resolve template→render, mixins, etc.
  }
}
```

**Lifecycle hooks** are arrays on the instance keyed by short codes in `LifecycleHooks` (`packages/runtime-core/src/enums.ts`):

```ts
export enum LifecycleHooks {
  BEFORE_CREATE = 'bc',  CREATED = 'c',
  BEFORE_MOUNT  = 'bm',  MOUNTED = 'm',
  BEFORE_UPDATE = 'bu',  UPDATED = 'u',
  BEFORE_UNMOUNT= 'bum', UNMOUNTED='um',
  DEACTIVATED   = 'da',  ACTIVATED='a',
  RENDER_TRIGGERED='rtg',RENDER_TRACKED='rtc',
  ERROR_CAPTURED='ec',   SERVER_PREFETCH='sp',
}
```

In `setupRenderEffect()` inside `renderer.ts`, the firing order is precisely:

| Hook | When | How |
|---|---|---|
| `beforeMount` (`bm`) | sync, before child subtree patch | `invokeArrayFns(bm)` |
| (patch subtree → children mount, recursively) | | |
| `mounted` (`m`) | deferred post-render | `queuePostRenderEffect(m, parentSuspense)` |
| `beforeUpdate` (`bu`) | sync, before re-render | `invokeArrayFns(bu)` |
| `updated` (`u`) | deferred post-render | `queuePostRenderEffect(u, parentSuspense)` |
| `beforeUnmount` (`bum`) | sync, before `scope.stop()` | `invokeArrayFns(bum)` |
| `unmounted` (`um`) | deferred post-render | `queuePostRenderEffect(um, parentSuspense)` |

Because post-render effects flush in registration order and children patch before parents finish, **`mounted` fires child-first, parent-last** — a critical guarantee for measuring child DOM in a parent's `mounted`. Same for `updated` and `unmounted`.

#### 2.8 `mountComponent` vs `updateComponent`

```ts
const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
  const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense))
  setupComponent(instance)
  if (instance.asyncDep) {                          // async setup() → Suspense path
    parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect)
    return                                           // wait for promise
  }
  setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized)
}
```

`setupRenderEffect` wraps `componentUpdateFn` in a `new ReactiveEffect(componentUpdateFn)`, configures `effect.scheduler = () => queueJob(update)`, and calls `update()` once to mount.

`updateComponent` is the parent-driven path: when a parent re-renders and produces a new vnode for the same component, the parent calls `updateComponent(n1, n2)` which assigns `instance.next = n2` and either calls `instance.update()` directly or relies on the queued render effect to pick it up.

#### 2.9 Suspense & async components

`Suspense` is a built-in component (`packages/runtime-core/src/components/Suspense.ts`) — a `SuspenseImpl` object with `__isSuspense: true` and a `process()` method. The VNode carries `ssContent` (default slot) and `ssFallback` (fallback slot). The `SuspenseBoundary` object tracks `deps: number` (pending async dependencies); each `async setup()` returning a Promise registers via `parentSuspense.registerDep`. When `deps === 0`, the boundary resolves and patches `ssContent` over `ssFallback`. Async components (`defineAsyncComponent`) compile to an `AsyncComponentWrapper` whose `setup()` returns a Promise — naturally hooking into the same machinery.

### 3. `@vue/compiler-core` and `@vue/compiler-dom` — Template Compilation

#### 3.1 Three phases

```ts
// packages/compiler-core/src/compile.ts
export function baseCompile(template, options) {
  const ast = isString(template) ? baseParse(template, options) : template
  transform(ast, { ...options, nodeTransforms: [...], directiveTransforms: {...} })
  return generate(ast, options)
}
```

- **`parse.ts`** → builds the AST (`RootNode` with `children: TemplateChildNode[]`).
- **`transform.ts`** → mutates the AST, attaches `codegenNode` to each transformable node, performs static hoisting and cache wrapping (`transformElement`, `transformText`, `vIf`, `vFor`, `vModel`, `vOn`, `vBind`, `vSlot`).
- **`codegen.ts`** → walks `codegenNode`s and emits a string render function.

#### 3.2 AST node types

```ts
// packages/compiler-core/src/ast.ts
export enum NodeTypes {
  ROOT, ELEMENT, TEXT, COMMENT, SIMPLE_EXPRESSION, INTERPOLATION,
  ATTRIBUTE, DIRECTIVE,
  COMPOUND_EXPRESSION, IF, IF_BRANCH, FOR, TEXT_CALL,
  // codegen-only
  VNODE_CALL, JS_CALL_EXPRESSION, JS_OBJECT_EXPRESSION, JS_PROPERTY,
  JS_ARRAY_EXPRESSION, JS_FUNCTION_EXPRESSION, JS_CONDITIONAL_EXPRESSION,
  JS_CACHE_EXPRESSION,
  // ssr codegen
  JS_BLOCK_STATEMENT, JS_TEMPLATE_LITERAL, JS_IF_STATEMENT,
  JS_ASSIGNMENT_EXPRESSION, JS_SEQUENCE_EXPRESSION, JS_RETURN_STATEMENT,
}
export enum ConstantTypes {
  NOT_CONSTANT = 0,
  CAN_SKIP_PATCH,    // 1 — can skip patch but not hoist
  CAN_CACHE,         // 2 — can be hoisted (referenced by name)
  CAN_STRINGIFY,     // 3 — can be turned into a static HTML string via createStaticVNode
}
```

#### 3.3 Static hoisting and `cacheStatic`

The `cacheStatic` transform (formerly `hoistStatic`) walks the tree post-order, computes `constType` per node from `getConstantType`, and:
- If a child subtree's `constType >= CAN_CACHE`, `context.hoist(child)` lifts it to `_hoisted_N` constants at module scope.
- If `constType === CAN_STRINGIFY` and there are ≥ 20 elements with ≥ 5 bindings, the **`stringifyStatic`** transform (DOM-only, in `compiler-dom`) replaces the subtree with `createStaticVNode("<div>...</div>", count)` — the browser parses the HTML once at insertion, faster than building VNodes.

#### 3.4 How directives compile

```html
<!-- v-if -->
<div v-if="ok">A</div><div v-else>B</div>
```
→
```js
ok ? (openBlock(), createElementBlock("div", {key:0}, "A"))
   : (openBlock(), createElementBlock("div", {key:1}, "B"))
```
A ternary `JS_CONDITIONAL_EXPRESSION`. The `key:0/1` ensures `isSameVNodeType` rejects across branches.

```html
<!-- v-for -->
<li v-for="(item, i) in list" :key="item.id">{{ item.name }}</li>
```
→
```js
(openBlock(true),                                // disableTracking — v-for has dynamic children
 createElementBlock(Fragment, null,
   renderList(list, (item, i) => (
     openBlock(),
     createElementBlock("li", {key:item.id},
       toDisplayString(item.name), 1 /* TEXT */)
   )),
   128 /* KEYED_FRAGMENT */))
```
The `KEYED_FRAGMENT` patch flag routes the diff to `patchKeyedChildren` (the LIS path).

```html
<!-- v-model on a native input -->
<input v-model="msg" />
```
→
```js
withDirectives(
  createElementVNode("input", {
    "onUpdate:modelValue": $event => (msg.value = $event)
  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]),
  [[vModelText, msg]]
)
```
A custom directive (`vModelText`/`vModelCheckbox`/`vModelSelect`/`vModelRadio` from `runtime-dom/src/directives/vModel.ts`) is attached via `withDirectives`. On a component, `v-model="x"` desugars to `:modelValue="x" @update:modelValue="x = $event"` with no directive.

#### 3.5 `runtimeHelpers.ts` — the helper symbol map

A Symbol table mapping every helper the codegen might reference: `CREATE_VNODE`, `CREATE_ELEMENT_VNODE`, `CREATE_BLOCK`, `CREATE_ELEMENT_BLOCK`, `OPEN_BLOCK`, `CREATE_COMMENT`, `CREATE_TEXT`, `CREATE_STATIC`, `RESOLVE_COMPONENT`, `RESOLVE_DIRECTIVE`, `WITH_DIRECTIVES`, `RENDER_LIST`, `RENDER_SLOT`, `TO_DISPLAY_STRING`, `NORMALIZE_CLASS`/`STYLE`/`PROPS`, `WITH_CTX`, `SET_BLOCK_TRACKING`, `MERGE_PROPS`, `GUARD_REACTIVE_PROPS`, `TO_HANDLERS`, `UNREF`, `KEEP_ALIVE`, `TELEPORT`, `SUSPENSE`. The codegen tracks `context.helpers: Set<symbol>` and only imports what's used → **tree-shakable codegen output**.

### 4. Vapor Mode — Goodbye Virtual DOM

**Status & timeline:** PR #12359 (Evan You) opened as WIP in November 2024; **the `vuejs/vue-vapor` branch was merged into the minor branch of `vuejs/core` in July 2025**, after which `vuejs/vue-vapor` was archived. **`v3.6.0-alpha.1` shipped at Vue Conf China in July 2025; `v3.6.0-beta.1` was released December 23, 2025; the current build at the time of writing is `v3.6.0-beta.12`** (May 15, 2026). Vapor lives in `packages/runtime-vapor` and `packages/compiler-vapor` inside the main `vuejs/core` repo.

**Activation:**
```vue
<script setup vapor>
import { ref } from 'vue'
const count = ref(0)
</script>
```
Or top-level: `createVaporApp(App).mount('#app')`. For hybrid apps:
```js
createApp(App).use(vaporInteropPlugin).mount('#app')
```

**What it does:** The Vapor compiler (`compiler-vapor`) emits **direct DOM-update code instead of VNode trees**. A template like `<button @click="count++">{{ count }}</button>` compiles to (roughly):
```js
const t0 = template('<button></button>')
function render(_ctx) {
  const n0 = t0()
  renderEffect(() => setText(n0, _ctx.count))
  on(n0, 'click', () => _ctx.count++)
  return n0
}
```
A `template()` helper clones a static `<template>` element; `renderEffect()` wraps each dynamic binding in a `ReactiveEffect`. **There's no VNode, no diffing, no patchFlags at runtime** — every dynamic node has its own fine-grained effect, exactly like Solid.js or Svelte 5.

**Measured trade-offs (per the official `v3.6.0-beta.1` release notes, December 23, 2025):**
- "Vapor Mode has demonstrated the same level of performance with Solid and Svelte 5 in 3rd party benchmarks" (matched in the js-framework-benchmark suite).
- **Bundle size: `createVaporApp` is 20.8 kB / 8.28 kB gzip vs `createApp` (VDOM) at 55.9 kB / 21.7 kB gzip** — roughly 38% of the VDOM gzip bundle, per the size table attached to PR #12359 by Evan You.
- Memory savings are reported anecdotally in 3rd-party blog posts (~"nearly halved" for list-heavy UIs), but the official release notes do not state a specific ratio.
- Subset of features: Options API not supported (only `<script setup>`); custom directives have a different signature (`(el, valueGetter) => cleanup?`).
- Coexists with VDOM via `vaporInteropPlugin` which bridges props/events/slots between the two trees — but installing it pulls in the VDOM runtime, negating bundle savings.

### 5. Architecture & Design Patterns — Mapped

| Pattern | Where in Vue 3 | Why |
|---|---|---|
| **Observer / Subject-Observer** | `Dep` (subjects) + `ReactiveEffect` (observers) | The whole reactivity system. `Dep` notifies its subscribers via the `Link` linked list. |
| **Proxy (GoF)** | `new Proxy(target, handlers)` in `reactive()`/`readonly()` | Transparent interception of reads (track) and writes (trigger). |
| **Strategy** | `RendererOptions` (`patchProp`, `insert`, `createElement`, ...) passed to `createRenderer(options)` | Renderer is platform-agnostic; pass DOM ops → web, pass Node ops → SSR, pass custom ops → NativeScript/canvas/PDF. |
| **Factory Method** | `createRenderer`, `createApp`, `createVNode`, `h`, `createReactiveObject` | All public entry points are factories returning configured instances. |
| **Abstract Factory + Closure-based encapsulation** | `baseCreateRenderer(options)` returns `{ render, hydrate, createApp: createAppAPI(render, hydrate) }` | The renderer closes over options; `createAppAPI` closes over `render`. No global state. |
| **Lazy initialization** | `ensureRenderer()` in `runtime-dom/src/index.ts` — `renderer ||= createRenderer(rendererOptions)` | Tree-shaking: if you only use reactivity, the renderer is never created. |
| **Bit flags** | `ShapeFlags`, `PatchFlags`, `EffectFlags`, `SchedulerJobFlags`, `ReactiveFlags` (the post-3.6 numeric variant) | Pack many booleans into one int; combinable with `|`, testable with `&`. |
| **Command queue / scheduler** | `scheduler.ts`'s `queue` array + `Promise.resolve().then(flushJobs)` | Microtask-batched, deduplicated, id-sorted priority queue. |
| **Composite** | VNode tree, EffectScope tree | Children handled uniformly with parents. |
| **Template Method** | `BaseReactiveHandler` ← `Mutable…` / `Readonly…` | Shared `get` trap, overridden `set`/`deleteProperty`. |
| **Plugin** | `app.use(plugin, options)` calls `plugin.install(app, options)` or `plugin(app, options)` | Plugins receive the `App` instance; mutate `app._context.config.globalProperties`, register components/directives, call `app.provide`. |
| **Dependency injection** | `provide`/`inject` via `instance.provides` chain (prototypal inheritance) | A child's `provides` `__proto__`'s the parent's, so `inject` walks the prototype chain — O(depth) lookup, zero copying. |

#### 5.1 What kind of queue is the scheduler?

A **sorted-insertion priority queue** keyed by `job.id`, with:
- *Total ordering by id ascending* (binary-search insertion via `findInsertionIndex`).
- *Deduplication* (`SchedulerJobFlags.QUEUED`).
- *Three priority bands*: PRE flush (`watch` w/ `flush:'pre'`), normal (component renders), POST flush (`watch` w/ `flush:'post'`, lifecycle `mounted`/`updated`/`unmounted`, DOM ref updates).
- *Microtask flush*: `currentFlushPromise = resolvedPromise.then(flushJobs)`.
- *Re-entrant during flush*: jobs queued during `flushJobs` are either appended (if `id ≥` tail) or binary-inserted. After main queue drains, post-flush callbacks run; if those queue more jobs, `flushJobs` recurses.

**Ordering guarantee:** because component `uid` is monotonically assigned at creation and parents are created before children, parent renders run before children. If a parent unmounts a child during its render, the child's queued render job gets `invalidateJob`'d (or skipped via `job.flags & DISPOSED`).

### 6. The Interview Angle — What Each System Teaches

| Topic | Vue 3 manifestation | Generalized interview question |
|---|---|---|
| **WeakMap for memory-safe metadata** | `targetMap` keyed by raw object; per-flavor `reactiveMap` caches | "Implement a memoization cache that doesn't prevent GC of inputs." |
| **Doubly-linked list with intrusive pointers** | `Link` between `Dep` and `Subscriber` (`prevDep`/`nextDep`/`prevSub`/`nextSub`) | "Implement a publisher with O(1) subscribe/unsubscribe and ordered notification." |
| **Bitmasks for state machines** | `EffectFlags`, `ReactiveFlags` (numeric), `ShapeFlags`, `PatchFlags` | "How would you store 8 booleans on a hot-path object efficiently?" |
| **Push-pull / glitch-free signals** | Vue 3.5/3.6 reactivity (alien-signals port): version counting + lazy dirty propagation | "Design a spreadsheet engine where derived cells don't recompute spuriously." |
| **Patience-sort LIS** | `getSequence()` in `renderer.ts` | LeetCode 300 + "minimize element moves to convert array A into array B" |
| **Microtask batching** | `queueFlush` → `Promise.resolve().then(flushJobs)` | "Coalesce 1000 state updates into one DOM write." |
| **Priority queue with stable ordering** | Scheduler `queue` sorted by uid, parent-before-child guarantee | "Design a task scheduler for a hierarchical update system." |
| **Compile-time → runtime info channels** | `PatchFlags` / `dynamicChildren` / `dynamicProps` emitted by compiler, consumed by `patchElement` | "How would you encode static analysis results to speed up runtime?" |
| **Strategy via dependency injection** | `RendererOptions` parameterizes `createRenderer` for DOM/SSR/native | "Design a rendering library that works on web, terminal, and native." |
| **Proxy interception with cache coherence** | `reactiveMap` ensures `reactive(x)` is stable; `RAW` flag inverts | "Implement transparent observable wrappers that idempotently re-wrap." |
| **Topological-ish update ordering without topo sort** | Scheduler exploits creation-order ⇒ parent-uid < child-uid | "Order dependent updates without paying for full topological sort." |
| **Block tree as static-skip optimization** | `dynamicChildren` collected by `openBlock`/`closeBlock`; diff walks it instead of full tree | "Optimize tree diff when you know which subtrees can change." |

#### System design questions Vue 3's source prepares you for

1. **"Design a reactive state-management library."** Walk through: Proxy traps → `track(target, key)` → `WeakMap<target, Map<key, Dep>>` → `activeSub` global pointer → `ReactiveEffect` runs `fn` while setting `activeSub = this` → in `set`, look up dep and notify. Then mention batching, lazy computed, push-pull dirty propagation, and why `WeakMap` (not `Map`) for the outer dictionary.

2. **"Design a virtual DOM diff algorithm."** Two-pointer prefix/suffix scan + keyed map + LIS for moves. Discuss why O(n³) tree-edit-distance is unaffordable and what assumptions (same-level reorder, key-stable identity) make it linear-ish.

3. **"Design a UI framework's update scheduler."** Microtask coalescing, deduplication via flags, parent-before-child via monotonic ids, three flush bands (pre/normal/post), re-entrancy during flush.

4. **"Design a template compiler."** AST → transforms → codegen pipeline, static hoisting via `constType` lattice, encode dynamic-vs-static info on output VNode calls for runtime fast paths.

5. **"How would you replace a VDOM with something faster?"** Discuss Vapor: compile templates to direct DOM update functions, attach a fine-grained `ReactiveEffect` per binding, keep VDOM only for slot/component interop.

---

## Recommendations

**Staged reading plan (2–3 weekends to do this well):**

1. **Weekend 1 — Reactivity end-to-end.** Read in order: `constants.ts` (15 lines), `dep.ts`, `effect.ts`, `baseHandlers.ts`, `ref.ts`, `reactive.ts`, then `computed.ts`. Implement a 200-line clone (the chibivue book and the Code-Pop/vue-3-reactivity repo are the canonical guides). **Threshold to move on:** you can explain `track`/`trigger` and why `reactive(obj) !== obj` but `reactive(reactive(obj)) === reactive(obj)`.

2. **Weekend 2 — Renderer + diff.** Read `vnode.ts` (focus on the `VNode` interface and `createBlock`/`openBlock`), then read `renderer.ts` in this order: `patch` → `processElement` → `mountElement`/`patchElement` → `patchChildren` → `patchKeyedChildren` → `getSequence`. Trace one render of a `v-for` by hand. **Threshold:** you can derive on a whiteboard why the LIS minimizes moves and write `getSequence` from memory.

3. **Weekend 3 — Compiler + scheduler + Vapor.** Read `compile.ts`, scan `transformElement.ts` and `cacheStatic.ts`, then `scheduler.ts` (small, ~400 lines). Skim `packages/compiler-vapor/src/generate.ts` for contrast. **Threshold:** you can run `compile('<div>{{x}}</div>')` mentally and predict the output, and explain why `nextTick` works.

**Pragmatic uses of this knowledge at work:**
- **Profile re-renders** with `onRenderTriggered` (`rtg`) hook — it tells you exactly which Dep triggered.
- **Use `markRaw()`** on large non-UI objects (Maps, class instances, third-party SDKs) that you put on reactive state — the `ReactiveFlags.SKIP = '__v_skip'` flag makes Vue's `createReactiveObject` short-circuit.
- **Use `shallowRef`/`shallowReactive`** for large immutable-style updates (Redux pattern) — only one dep instead of N.
- **Prefer keyed `v-for` with stable IDs** — without keys, Vue falls back to `patchUnkeyedChildren` which does index-based patching and never gets the LIS speedup.
- **Don't fight the scheduler.** If you need a value after the DOM updates, `await nextTick()` is correct. `setTimeout(0)` is not — it runs in a later macrotask.

**When to upgrade to Vapor Mode (criteria that would change the recommendation):**
- ✅ Try Vapor when: a single perf-critical page (data grid, dashboard, animation-heavy view) is the bottleneck and you can isolate it with `<script setup vapor>`. Greenlit by `v3.6.0-beta.12` (May 2026) stability for non-Options-API targets.
- ⏸ Wait when: your component library is VDOM-based — interop adds back the VDOM runtime cost (the gzip bundle climbs from ~8 kB back toward ~22 kB).
- ❌ Avoid when: your codebase relies on Options API or extension-style mixins; Vapor doesn't support them. Wait for the eventual 3.6 stable release.

---

## Caveats

- **Reactivity is a moving target.** The reactivity core was rewritten in 3.4 (PR #10397, version counting + doubly-linked-list, by Evan You) and again in 3.6 (PR #12349, port of alien-signals push-pull algorithm by Johnson Chu). Tutorials and blog posts dated 2020–2023 describe the `Set<ReactiveEffect>` model that no longer matches `main`. Always check the git blame.
- **Vapor Mode is still pre-stable.** As of May 2026 the project is at `v3.6.0-beta.12` (released May 15, 2026) and `v3.5.34` remains the stable line. Official guidance still says *"we do not recommend migrating existing components to Vapor Mode yet"*. Treat the API and behavior list as subject to change until 3.6 stable.
- **The `getSequence` implementation in `renderer.ts` returns the indices of the LIS in `arr`, not the values, and treats `0` as a sentinel ("no old node, mount fresh").** Reading it as a standard LeetCode-style LIS will confuse you. The function is patience-sort with binary search plus a predecessor array to reconstruct.
- **`createRenderer` is exported from `vue`** but it's an "advanced" API meant for custom renderer authors. Most app code never touches it.
- **There are two `PatchFlags` with value `-1`** (`HOISTED` and `CACHED`) — they're synonyms in current code; older code may show one or the other. Don't try to disambiguate them by value.
- **The subagent step confirmed the post-3.6 file paths** (`baseHandlers.ts` is 264 lines, `collectionHandlers.ts` is 329 lines, `renderer.ts` is 2618 lines, `LifecycleHooks` enum has 14 entries including `SERVER_PREFETCH = 'sp'`). Exact line numbers will drift with each PR; use file structure and function names as anchors.
- **Bundle-size figures (`createVaporApp` 20.8 kB / 8.28 kB gzip vs `createApp` 55.9 kB / 21.7 kB gzip)** are taken from the size-report table attached to PR #12359 at merge time; subsequent betas may have shifted these by single-digit kB.

## Completion table

| Spec item | Covered |
|---|---|
| @vue/reactivity — reactive/ref/computed/effect implementations | ✅ §1.4 |
| baseHandlers.ts / collectionHandlers.ts | ✅ §1.5 |
| targetMap, Dep, ReactiveEffect | ✅ §1.1–1.2 |
| track/trigger algorithm | ✅ §1.3 |
| Scheduler, queueFlush, microtask, nextTick | ✅ §1.6 |
| shallowReactive / readonly / shallowReadonly + ReactiveFlags | ✅ §1.5 |
| @vue/runtime-core — VNode shape | ✅ §2.1 |
| createVNode vs h | ✅ §2.1 |
| ComponentInternalInstance shape | ✅ §2.6 |
| Lifecycle order in source | ✅ §2.7 |
| setupStatefulComponent / setup() | ✅ §2.7 |
| patch() entry | ✅ §2.4 |
| patchKeyedChildren + LIS | ✅ §2.5 |
| mountComponent vs updateComponent | ✅ §2.8 |
| Suspense / async | ✅ §2.9 |
| Compiler: parse → transform → codegen | ✅ §3.1 |
| AST node types | ✅ §3.2 |
| STABLE_FRAGMENT / HOISTED / static hoisting | ✅ §3.3 + §2.3 |
| Complete PatchFlags enum | ✅ §2.3 |
| v-if / v-for / v-model compilation | ✅ §3.4 |
| Vapor mode — problem, DOM ops, status, coexistence | ✅ §4 |
| Architecture patterns (Observer, Strategy, Proxy, Factory, scheduler, plugin) | ✅ §5 + §5.1 |
| Interview angle — CS concepts, system design Q's, patterns | ✅ §6 |
| ShapeFlags enum | ✅ §2.2 |
| GitHub source paths | ✅ throughout |