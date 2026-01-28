# AWS & Frontend Lead - Training Insights

## Key Insights Checklist

### AWS Services to Learn
- [ ] **S3 Buckets** - storage for static assets
- [ ] **CloudFront** - AWS CDN, commonly asked in interviews
- [ ] **CloudRun / Lambda / Fargate** - serverless deployment options
- [ ] **LocalStack** - local AWS testing (github.com/localstack/localstack)

### Frontend Interview Topics (High Priority)
- [ ] Micro Frontend architecture
- [ ] Performance optimization (Vue/React)
- [ ] Build time optimization & package management
- [ ] CDN tuning + Brotli compression
- [ ] Caching strategies (what to cache, TTL, invalidation)
- [ ] Deploying static + SSR apps

### Observability Stack
- [ ] **OpenTelemetry** - important for FE roles
- [ ] **Grafana Cloud** - free tier for testing, widely used
- [ ] Elastic APM (less recommended)

### Zero-Downtime Deployment Pattern
- [ ] Spin up new version
- [ ] Run healthchecks
- [ ] Shift traffic to new version
- [ ] Remove previous version

### Interview Strategy
- [ ] Redirect conversation to your strengths when interviewer seems unsure
- [ ] Mention tools/implementations you've worked with proactively

---

## Action Items

### Phase 1: Setup Demo Project
1. Create a React/Next app repo
2. Setup GitHub Actions for CI/CD
3. Deploy to S3 + CloudFront
4. Add custom domain with DNS records

### Phase 2: Monitoring Integration
5. Setup Grafana Cloud account (free tier)
6. Add OpenTelemetry to the app
7. Configure dashboards for FE metrics

### Phase 3: Performance Optimization
8. Implement Brotli compression
9. Configure CDN caching rules
10. Document caching invalidation strategy
11. Optimize build time (analyze bundle, tree-shaking)

### Phase 4: Local Development
12. Setup LocalStack for local AWS testing
13. Use AI CLI (gemini-cli/claude) to document deployment steps

### Study Topics
- [ ] Micro Frontend patterns (Module Federation, etc.)
- [ ] React/Next performance patterns
- [ ] AWS CloudFront configuration
- [ ] CI/CD pipeline best practices

---

## Resources
- LocalStack: https://github.com/localstack/localstack
- ChatGPT guide shared: https://chatgpt.com/share/697274b8-0328-800a-9e88-21467ea276d6
