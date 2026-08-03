Bueno, vamos uno por uno con más carne:

---

## SOLID

**Single Responsibility** — una clase/función hace una sola cosa. Si tu `UserService` también manda emails, está mal. Eso es responsabilidad de un `EmailService`.

**Open/Closed** — abierto para extensión, cerrado para modificación. Si agregás un nuevo tipo de pago, no deberías tocar el código existente, sino agregar una nueva clase que implementa la misma interfaz.

**Liskov Substitution** — si `B` extiende `A`, deberías poder usar `B` donde usabas `A` sin romper nada. El ejemplo clásico roto: `Square extends Rectangle` — si el rectángulo tiene `setWidth` y `setHeight` independientes, el cuadrado rompe eso porque sus lados deben ser iguales.

**Interface Segregation** — mejor muchas interfaces pequeñas que una grande. No forzés a una clase a implementar métodos que no usa.

**Dependency Inversion** — los módulos de alto nivel no deben depender de los de bajo nivel; ambos deben depender de abstracciones. En la práctica: inyectás dependencias en vez de instanciarlas adentro. Tu `OrderService` recibe un `PaymentGateway` por parámetro, no crea un `StripeGateway` adentro — así podés swappearlo por otro o mockearlo en tests.

---

## DRY / KISS / YAGNI

**DRY** (Don't Repeat Yourself) — si copiás y pegás lógica, la abstraés. El riesgo es sobre-abstraer: no toda repetición merece una abstracción, especialmente si el código similar hace cosas sutilmente distintas.

**KISS** (Keep It Simple, Stupid) — la solución más simple que funciona. Antes de introducir un patrón complejo, preguntate si el problema lo justifica. Un `if/else` puede ser más claro que una cadena de estrategias.

**YAGNI** (You Aren't Gonna Need It) — no implementes funcionalidad "por si acaso la necesitamos después". Costo real hoy, beneficio hipotético mañana. Aplica mucho a premature optimization.

---

## REST vs GraphQL

**REST** — cada recurso tiene su URL, los verbos HTTP tienen significado (`GET`, `POST`, `PUT`, `DELETE`). Predecible, fácil de cachear (CDN/HTTP cache funciona out of the box), bien entendido por todos.

El problema: **over-fetching** (te mandan campos que no usás) y **under-fetching** (necesitás varios endpoints para armar una pantalla).

**GraphQL** — el cliente pide exactamente los campos que necesita, en una sola query. Ideal cuando tenés múltiples clientes (mobile vs web) con necesidades distintas, o cuando armás una pantalla compleja que antes necesitaba 5 llamadas REST.

El costo: más complejo de implementar, caching más difícil, N+1 si no usás DataLoader, curva de aprendizaje.

**Cuándo REST:** APIs públicas, microservicios internos simples, cuando el caching HTTP es importante. **Cuándo GraphQL:** BFF (Backend for Frontend), apps con muchas vistas distintas, cuando el cliente necesita control fino sobre los datos.

---

## Indexing

Un índice es básicamente una estructura auxiliar (generalmente un B-Tree) que la BD mantiene ordenada por un campo para que las búsquedas sean O(log n) en vez de O(n).

**El trade-off:** cada índice ocupa espacio en disco y hace más lentas las escrituras (INSERT/UPDATE/DELETE tienen que actualizar también el índice).

**Cuándo indexar:** columnas que usás frecuentemente en `WHERE`, `JOIN ON`, `ORDER BY`. No indexar columnas de baja cardinalidad (ej: un campo booleano — el índice no ayuda porque filtra poco).

**Index compuesto:** podés indexar múltiples columnas juntas. El orden importa: `(user_id, created_at)` sirve para queries que filtran por `user_id` o por `user_id + created_at`, pero no para queries que filtran solo por `created_at`.

---

## N+1 Problem

```
// ❌ N+1: 1 query para posts + 1 por cada post para el autor
posts = getPosts()                     // 1 query
posts.forEach(p => getUser(p.userId)) // N queries
```

```
// ✅ Una sola query con JOIN
posts = getPostsWithAuthors() // 1 query con JOIN
```

En ORMs como Prisma es `include: { author: true }`. En GraphQL, DataLoader agrupa todas las llamadas a `getUser` de una misma resolución en una sola query batch.

---

## CAP Theorem

En un sistema distribuido que puede sufrir una **partición de red** (nodos que no se comunican), tenés que elegir:

- **CP** (Consistency + Partition Tolerance) — todos los nodos ven los mismos datos, pero el sistema puede rechazar requests si no puede garantizar consistencia. Ej: HBase, Zookeeper. Elegís esto en finanzas, donde leer datos desactualizados es inaceptable.
    
- **AP** (Availability + Partition Tolerance) — el sistema siempre responde, pero puede darte datos desactualizados (eventual consistency). Ej: Cassandra, DynamoDB. Elegís esto en redes sociales, contadores de likes, carritos de compra.
    

**CA** (Consistency + Availability sin Partition Tolerance) — solo posible si los nodos nunca se desconectan, o sea, una BD single-node. En la práctica las particiones de red son inevitables, así que siempre estás eligiendo entre C y A.

---

¿Querés que armemos un mock de entrevista donde yo te pregunto y vos respondés? Así practicás explicarlo en voz alta, que es donde suele trabarse la gente.