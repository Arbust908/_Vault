# API Design And Reliability

Use the watchlist example when it helps make an answer specific.

1. Which HTTP status codes would you use for successful creation, validation failure, missing resource, conflict, and unexpected server failure?
2. What should a consistent JSON error shape contain?
3. Where should request parsing and validation stop, and where should domain rules begin?
4. How would you prevent duplicate watchlist entries when two add requests arrive at nearly the same time?
5. What makes an endpoint idempotent, and how would you make a retried write safe?
6. Which operations need a database transaction or uniqueness constraint?
7. How would authentication and authorization affect the watchlist route design?
8. What should be logged for a failed request, and which data should not be logged?
9. When would you add caching, and how would you reason about invalidation for a mutable watchlist?
10. How would a rate limiter change latency, fairness, failure behavior, and system capacity?
