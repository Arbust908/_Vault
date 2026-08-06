Assessment
Overall: 3/5
You understand the broad principles, especially HTTP status families, authorization, transactions, caching, and deduplication. The main gap is translating those principles into mechanisms that remain correct under concurrency, retries, and distributed deployment.
1. HTTP Status Codes: 3/5
Your classification of 2xx, 4xx, and 5xx is correct, but the question requires specific codes.
- Successful creation: 201 Created
- Validation failure: usually 422 Unprocessable Content, sometimes 400 Bad Request
- Missing resource: 404 Not Found
- Conflict: 409 Conflict
- Unexpected server failure: 500 Internal Server Error
201 may include a Location header pointing to the new resource.
Proposed answer:  
I would return 201 Created for successful creation, 422 for a syntactically valid request that fails validation, 404 when the resource does not exist, 409 when the request conflicts with current state, and 500 for an unexpected server error.
2. Consistent JSON Error Shape: 3/5
code and message are correct. A trace identifier is useful, but an API should not expose an internal stack trace because it can reveal sensitive implementation details.
A useful shape could contain:
- Stable machine-readable error code
- Human-readable message
- Field-level validation details
- Request or correlation ID
- Optional documentation link
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "The request contains invalid fields.",
    "details": [
      {
        "field": "title",
        "message": "Title is required."
      }
    ],
    "requestId": "req_123"
  }
}
The server logs can associate requestId with the internal exception and stack trace.
3. Parsing, Validation, and Domain Rules: 2/5
Your final interpretation places validation before the request is sent, but the question is primarily about responsibilities inside the server. Client-side validation improves UX but cannot be trusted. The server must always validate requests.
The transport or controller layer should handle:
- Parsing JSON, query parameters, and path parameters
- Required fields and basic types
- Format and range validation
- Authentication information
The domain layer should handle business rules:
- Whether the user may modify this watchlist
- Whether the movie is already present
- Whether a watchlist has reached its item limit
- Whether a particular state transition is allowed
Proposed answer:  
The route boundary should parse untrusted input and validate its structure, types, and basic constraints. It should then pass typed values to the domain layer. The domain layer should enforce business invariants and make decisions based on the application's current state.
4. Concurrent Duplicate Entries: 2/5
You correctly identified the need for a unique identifier and duplicate detection. However, an in-memory Map or check-before-insert is insufficient:
1. Request A checks and sees no entry.
2. Request B checks and sees no entry.
3. Both insert the entry.
It also fails when the application runs on multiple servers.
The authoritative protection should be a database uniqueness constraint, such as:
UNIQUE (watchlist_id, movie_id)
The application can then use an atomic insert/upsert or catch the uniqueness violation and return the existing entry or a 409 Conflict.
A FIFO queue could serialize writes, but it adds complexity and still benefits from a database constraint.
Proposed answer:  
I would add a unique database constraint on (watchlist_id, movie_id) and perform an atomic insert or upsert. This prevents duplicates even when concurrent requests reach different application instances.
5. Idempotency and Safe Retries: 3/5
The term is idempotent. An operation is idempotent when performing the same operation multiple times has the same intended effect as performing it once.
Your command-ID idea is an appropriate mechanism for making retries safe.
Examples:
- PUT /watchlists/123/items/456 is naturally idempotent because it sets a resource to a specified state.
- DELETE is idempotent in effect because the resource remains deleted after repeated requests.
- POST usually needs an idempotency key if retries could create duplicate effects.
Proposed answer:  
An endpoint is idempotent when repeating an identical request does not produce additional effects. For a retried write, I could use a client-provided idempotency key, store the key with the operation's result, and return that result when the same key is received again. Database uniqueness constraints should still protect the underlying invariant.
6. Transactions and Uniqueness Constraints: 3/5
Your description of a transaction is correct: use one when several changes must succeed or fail as a unit.
Transactions are needed when:
- Multiple writes maintain one invariant
- A write depends on a preceding read
- Creating related records that must remain consistent
- Moving or decrementing resources without partial completion
A uniqueness constraint is not necessary for every kind of creation. Primary keys are unique, but additional constraints should represent business rules, such as:
- One entry per movie per watchlist
- One account per normalized email
- One membership per user per watchlist
Proposed answer:  
I would use a transaction when multiple reads or writes must be atomic to preserve a business invariant. I would use a uniqueness constraint wherever the database must prevent multiple records representing the same business identity, such as (watchlist_id, movie_id).
7. Authentication and Authorization: 4/5
You correctly distinguish knowing who the user is from deciding which actions they can perform.
One terminology correction:
- 401 Unauthorized actually means unauthenticated or invalid credentials.
- 403 Forbidden means authenticated but not permitted.
- Some APIs return 404 instead of 403 to avoid revealing that another user's resource exists.
The server should derive the user identity from a verified session or token, not from a user ID supplied in the request body.
Proposed answer:  
Authentication middleware should establish the current user. The route or domain policy should then verify that the user owns the watchlist or has the required collaborator role for the requested action. Unauthenticated requests receive 401; authenticated users without permission receive 403, or possibly 404 when resource existence should be concealed.
8. Failed Request Logging: 2/5
URL, parameters, and time are useful beginnings, but operational logs need enough structured context to trace and diagnose a failure.
Useful fields include:
- Timestamp
- Request or correlation ID
- HTTP method and route template
- Response status
- Stable application error code
- Request duration
- Authenticated user or tenant ID, when safe
- Service and deployment version
- Internal exception and stack trace
- Relevant sanitized context
Avoid logging:
- Passwords
- Session cookies
- Authorization headers and API keys
- Payment information
- Personal or medical data unless strictly necessary
- Complete request bodies by default
- Sensitive query parameters
- Raw database credentials
Prefer the route template /watchlists/:id over a raw URL containing sensitive values.
Proposed answer:  
I would log structured diagnostic data such as the request ID, method, route, status, duration, error code, sanitized user context, and internal exception. I would redact credentials, tokens, cookies, passwords, sensitive personal information, and unnecessary request bodies.
9. Caching and Invalidation: 4/5
Your cache-aside description and invalidation strategy are good. You correctly recognize that mutations must invalidate cached reads.
Additional concerns:
- Add caching only when measurements show repeated expensive reads.
- Include the watchlist ID and any representation options in the cache key.
- Ensure private watchlists cannot leak between users.
- Invalidate every cached representation affected by a mutation.
- A short TTL can limit the impact of missed invalidation.
- Concurrent requests can still refill the cache with stale data, so ordering or versioning may matter.
Proposed answer:  
I would add caching when watchlist reads are frequent or expensive enough to justify the complexity. On a mutation, I would commit the database change first and then invalidate all affected cache keys. Cache keys must preserve authorization boundaries, and a TTL can provide additional protection against stale entries.
10. Rate Limiting: 3/5
Your fairness and resource-protection reasoning is correct. A rate limiter does not increase physical capacity; it controls admission so excessive traffic cannot consume all available capacity.
Its effects are:
- Latency: accepted traffic may have lower and more predictable latency; throttled traffic either waits or fails immediately.
- Fairness: per-user or per-tenant limits prevent one client from monopolizing resources.
- Failure behavior: excess requests generally receive 429 Too Many Requests, ideally with Retry-After.
- Capacity: it protects finite capacity and prevents overload cascades but does not create more CPU, memory, or database throughput.
A global limit alone might still permit one client to consume the entire allowance. Fairness usually requires limits partitioned by user, tenant, IP, or API key.
Proposed answer:  
A rate limiter protects system capacity by rejecting or delaying requests beyond an allowed rate. This can improve latency for admitted traffic and prevent one client from monopolizing resources. Rejected requests should receive 429 Too Many Requests, often with Retry-After. Rate limiting preserves existing capacity rather than increasing it.
Main Learning Priorities
1. Treat the database as the final authority for concurrency and uniqueness.
2. Separate transport validation from domain invariants.
3. Distinguish idempotency, deduplication, and transactions.
4. Never expose internal traces or secrets through API responses or logs.
5. Think of rate limiting as admission control, not additional capacity.