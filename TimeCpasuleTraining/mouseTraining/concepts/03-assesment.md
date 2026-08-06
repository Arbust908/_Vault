Overall: 22/50
You understand several core TypeScript mechanisms, particularly DTOs, runtime validation, discriminated unions, and branded IDs. The main gap is distinguishing data structure/type mechanics from domain-modeling decisions.
1. Domain Entity vs API DTO
Score: 2/5
You correctly identify an API DTO as the shape transferred across an API boundary. However, a domain entity is not simply the client-side type used by UI elements.
- A DTO describes transport representation: JSON field names, nullable values, serialized dates, and API-specific structure.
- A domain entity represents a business concept and its rules. It may contain behavior, validated values, and invariants.
- UI-specific types are usually view models or component props.
- DTOs and domain entities may exist on either client or server.
Compile time: TypeScript can ensure that DTOs, entities, and view models are not accidentally mixed when they have distinct types.
Runtime: API DTOs must be validated and transformed before being trusted as domain entities.
Proposed answer:
An API DTO represents data as it crosses an API boundary. A domain entity represents a business concept and its valid state, independently of transport or UI concerns. DTOs may require runtime validation and transformation into domain entities. UI elements may use a separate view model derived from the entity.
2. Optional, Nullable, or Explicitly Empty
Score: 3/5
Your general understanding is correct, but “it depends on requirements” needs more precise rules.
- Optional: The field may be absent and absence itself has meaning.
- Nullable: The field exists, but its value may explicitly be unknown or unavailable.
- Empty value: The field exists and has a valid empty value such as "", [], or 0.
These states should not be treated as interchangeable:
type Example = {
  nickname?: string;          // may be absent
  deletedAt: Date | null;     // known not to have a deletion date
  tags: string[];             // always present, possibly empty
};
An empty string should generally not mean “missing” unless that is explicitly part of the domain.
Compile time: TypeScript forces callers to account for the states represented by the type.
Runtime: Validation must determine whether incoming missing, null, or empty values are permitted.
Proposed answer:
Make a field optional when its presence is not guaranteed. Use null when the property must exist but can explicitly have no value. Use an empty value when emptiness is a valid value of the field, such as an empty list meaning that an entity currently has no tags.
3. Discriminated Unions
Score: 3/5
You understand narrowing and mutually exclusive properties. The missing piece is that a discriminated union should use a shared literal-valued property such as status or kind, rather than checking for the incidental presence of another property.
type Result<T> =
  | { status: "success"; data: T }
  | { status: "failure"; error: string }
  | { status: "skipped"; reason: string };
function process<T>(result: Result<T>) {
  switch (result.status) {
    case "success":
      return result.data;
    case "failure":
      return result.error;
    case "skipped":
      return result.reason;
  }
}
Using error?: never can enforce mutual exclusivity, but an explicit discriminant is usually clearer and supports exhaustive checking.
Compile time: TypeScript narrows each branch and prevents access to properties that do not exist in that outcome.
Runtime: The discriminant is a real runtime value, but TypeScript does not verify that external data actually conforms to the union.
Proposed answer:
A discriminated union gives every outcome a shared literal property such as status. Checking that property narrows the value to the corresponding type, making only valid fields accessible. It also allows exhaustive checking so that adding a new outcome produces compile-time errors in unhandled code.
4. Runtime Validation at an HTTP Boundary
Score: 4/5
This is substantially correct. The terminology is superset, not “superscript,” and the likely library name is Zod.
TypeScript types are erased during compilation. An assertion such as this performs no validation:
const user = await response.json() as User;
It only tells the compiler to trust the programmer.
Compile time: TypeScript checks code written against the declared type.
Runtime: A schema library such as Zod, Valibot, or ArkType must inspect unknown data and reject invalid values.
Proposed answer:
TypeScript types are erased at runtime, so they cannot guarantee that an HTTP response matches a declared interface. Data entering through an HTTP boundary should initially be treated as unknown and validated with a runtime schema before it is used as trusted application data.
5. Map vs Array
Score: 3/5
Your lookup-complexity reasoning is correct. However, arrays do not necessarily provide faster arbitrary deletion. Finding and removing an entity by ID from an array is normally O(n).
Choose Map when:
- Entities are primarily accessed by unique key.
- Frequent lookup, replacement, or deletion by ID is required.
- Insertion order is sufficient and array operations such as filter are not central.
Choose an array when:
- Ordered iteration is the primary operation.
- Sorting, filtering, slicing, or rendering a list is common.
- The collection is small enough that linear lookup is acceptable.
A Map is not directly JSON-serializable, which can matter for persistence and state-management tools.
Compile time: Map<MovieId, Movie> constrains key and value types.
Runtime: Map offers expected constant-time key operations, while array lookup by ID is linear.
Proposed answer:
I would choose a Map when entities are frequently read, updated, or deleted by a unique ID because key-based operations have expected O(1) complexity. I would choose an array when ordering, list transformations, serialization, or sequential iteration are more important.
6. Normalized vs Nested Data
Score: 2/5
Normalization does not inherently make data more strictly typed. Both normalized and nested data can be strictly typed.
Normalized data stores entities once and refers to them by ID:
type State = {
  moviesById: Map<MovieId, Movie>;
  selectedMovieIds: MovieId[];
};
Normalized data:
- Avoids duplicate copies of the same entity.
- Makes updates more consistent.
- Supports efficient lookup and shared references.
- Requires joins/selectors to reconstruct nested views.
- Can make ordering and cache management more complex.
Nested data:
- Closely matches API responses and UI rendering needs.
- Is easier to consume locally.
- Can duplicate entities in multiple locations.
- Makes synchronized updates harder.
- May create broader immutable updates or rerenders, depending on the state system.
Compile time: Either representation can be typed safely.
Runtime: The tradeoffs concern update complexity, lookup cost, duplication, memory, and rendering behavior.
Proposed answer:
Normalized data stores each entity once and represents relationships with IDs. This makes shared updates and key-based access easier but requires selectors to reconstruct nested views. Nested data is convenient for local rendering and mirrors many API responses, but it can duplicate entities and make consistent updates harder.
7. Preventing ID Mix-ups
Score: 3/5
The approach is correct, but the syntax is an intersection using &, not &&. The brand must also be represented as a type.
type MovieId = string & { readonly __brand: "MovieId" };
type UserId = string & { readonly __brand: "UserId" };
A stronger pattern uses a unique symbol:
declare const movieIdBrand: unique symbol;
declare const userIdBrand: unique symbol;

type MovieId = string & { readonly [movieIdBrand]: true };
type UserId = string & { readonly [userIdBrand]: true };
Creation should usually happen through validated factory functions rather than unrestricted casts.
Compile time: Branded types stop UserId from being passed where MovieId is required.
Runtime: Both values are still ordinary strings. Runtime validation is needed to enforce ID format or existence.
Proposed answer:
I would use branded string types so that IDs remain strings at runtime but are distinct at compile time. Factory functions should validate external strings before branding them as MovieId or UserId.
8. Constructor or Factory Invariants
Score: 0/5
An invariant is a condition that must always be true for an object to represent a valid domain value.
Examples:
- A date range must have start <= end.
- A price cannot be negative.
- A movie title cannot be blank.
- A percentage must be between 0 and 100.
- Two fields may be mutually exclusive.
- A status may require particular accompanying fields.
If callers must remember to enforce these rules, invalid objects can be created. A constructor or factory should establish them once.
class DateRange {
  private constructor(
    readonly start: Date,
    readonly end: Date,
  ) {}

  static create(start: Date, end: Date): DateRange {
    if (start > end)
      throw new Error("Start must not be after end");

    return new DateRange(start, end);
  }
}
For expected validation failure, returning a result type is often preferable to throwing.
Compile time: Types can enforce structural invariants, especially with unions and branded values.
Runtime: Relationships between actual values generally require checks inside a factory or constructor.
Proposed answer:
Constructors or factories should enforce every rule that must be true for an instance to be valid. Callers should not be able to construct values such as a negative price or an invalid date range and then be expected to validate them afterward.
9. Partial Updates
Score: 2/5
You correctly identify Pick, Omit, and Partial, but Partial<Entity> often creates the ambiguity mentioned in the question.
type User = {
  name: string;
  nickname: string | null;
};

type UserPatch = Partial<User>;
For nickname, it becomes unclear whether:
- The property is absent because it should not be updated.
- The property is present as null because it should be cleared.
- undefined is an intended value.
A more precise update type models each operation explicitly:
type UserUpdate =
  | { kind: "rename"; name: string }
  | { kind: "setNickname"; nickname: string }
  | { kind: "clearNickname" };
For conventional patch semantics, use an explicit DTO:
type UpdateUserDto = {
  name?: string;
  nickname?: string | null;
};
Document the meaning:
- Missing means “leave unchanged.”
- null means “clear.”
- A value means “replace.”
Compile time: A dedicated update type restricts which fields and combinations can be submitted.
Runtime: Validation must reject invalid values and forbidden field combinations.
Proposed answer:
I would define a dedicated update type rather than automatically using Partial<Entity>. Each field should have explicit patch semantics: absent means unchanged, a value means replace, and null means clear when clearing is supported. For domain operations, discriminated update commands can eliminate further ambiguity.
10. Result Types and Exceptions
Score: 0/5
Expected domain failures should be represented as values because callers are expected to handle them.
type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

type PurchaseError =
  | { kind: "insufficientFunds" }
  | { kind: "movieUnavailable" }
  | { kind: "accountSuspended" };
function purchaseMovie(): Result<Purchase, PurchaseError> {
  // ...
}
Use an exception for unexpected or unrecoverable failures, such as:
- Database connection failure.
- Broken internal invariant.
- Programming error.
- Infrastructure dependency unexpectedly unavailable.
The exact boundary depends on architecture: infrastructure failures may be converted into result values if the caller has a meaningful recovery path.
Compile time: A result type makes expected failures visible and allows exhaustive handling.
Runtime: Exceptions still exist and must be caught at an appropriate application boundary. TypeScript does not type thrown exceptions reliably.
Proposed answer:
A good result type is a discriminated union containing either a success value or a specific, typed domain error. Expected failures such as insufficient funds should be returned as values. Exceptions should be reserved for unexpected failures, violated internal invariants, or infrastructure errors that the current caller cannot meaningfully handle.
Main Areas to Review
1. Separate DTOs, domain entities, and UI view models.
2. Treat absence, null, and empty values as different domain states.
3. Remember that normalization is a data-organization strategy, not a typing feature.
4. Use dedicated command or patch types instead of defaulting to Partial<T>.
5. Learn the distinction between expected domain errors and exceptional failures.