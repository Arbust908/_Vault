Sunday 5:46 PM
Yeah.

Yep — what do you want to pick back up?

“So I want to buff up my skills as a developer, and I've seen a video about CI/CD, and I wanted to know a bit more about how it would work, is it time, and is there a way to build into an action and deploy to my Hetzner docdeploy server?”

CI/CD is all about automating your build, test, and deployment processes. You'd typically have a pipeline that triggers on code changes, runs tests, builds your app, and deploys it. GitHub Actions is a great tool for that. You can absolutely configure it to deploy straight to your Hetzner Dokploy server. Usually, you'd set up SSH-based deployment or use Dokploy’s API. Once that’s configured, pushing to your main branch (or whichever you choose) could automatically trigger deployment.

“And is there a way, I assume it's a yes, but is there a way to have it also deploy to my software stack that we've been working on?”

Yes, you can deploy to multiple targets in the same GitHub Actions pipeline. You’d define separate jobs or steps—one for Hetzzner Dokploy and another for your Cloudflare stack. Each job can have its own environment variables, credentials, and deployment steps, so you can deploy to both environments in a single pipeline run.

“I'm talking about credentials. Is there a way to save those credentials securely on GitHub so it's there for the action to use it? And where else could we save the credentials, the secrets, so that we can use them everywhere?”

On GitHub, you’d store your secrets in the repository’s Actions secrets—those are encrypted and only available to your workflows. For broader use, if you want credentials accessible across multiple environments or platforms, consider something like a secure vault (e.g., HashiCorp Vault) or a secrets manager in your cloud provider (like AWS Secrets Manager or Google Secret Manager). That way, you can centralize secrets and access them from various systems consistently and securely.

“Talking about that, a lot of job descriptions nowadays have as a requirement AWS, um, and I know there at least we have S3 as a bucket for files. What other services do I need to learn from AWS and is there any like compatibility table that we could build because I'm sure I do know how to use some other tools that maybe, you know, not the AWS branded ones.”

Common AWS services that pop up a lot include EC2 (virtual servers), Lambda (serverless functions), RDS (managed databases), DynamoDB (NoSQL), ECS or EKS (containers), IAM (identity and permissions), and CloudFront (CDN). Now, to map what you already know to AWS, you'd list your current tools. For example, if you know DigitalOcean droplets, those roughly align with EC2. If you’ve used Firebase Firestore, that’s conceptually similar to DynamoDB. We could outline a table mapping tools you know to AWS counterparts to smooth out the learning curve. If you give me some tools you know, I can match them up!

“Oh, so I've used, as you said, DigitalOcean droplets. I know how to use D2, I think it is, the file store for Cloudflare. I've used managed databases like Supabase or PocketBase. I have a DocFlow instance on a Hetzner server, so I do have some infrastructure knowledge. I know a bit about Docker Compose and container. I have the basic knowledge of Proxmox server, so I am a tinkerer by nature. So I do have some experience.”

Perfect. Let’s map that quickly: DigitalOcean Droplets align with AWS EC2. Cloudflare D2 would map loosely to S3 for object storage. Supabase or PocketBase managed databases align with AWS RDS or DynamoDB (depending on whether relational or NoSQL). Docker Compose and containers integrate with AWS ECS or EKS. For Proxmox, while AWS doesn’t have a direct hypervisor equivalent, you’d think about EC2 instances running your own hypervisor if needed. Your tinkering mindset fits well—AWS is broad, but with that foundation, you'll adapt quickly!

Worked for 10s

Given what you already know, I’d build the learning path around mapping concepts, not memorizing AWS product names.

One correction from earlier: Cloudflare’s object storage is R2, not D2. And PocketBase is more accurately a self-hosted backend built around SQLite; Supabase maps much more directly to managed PostgreSQL.

AWS for a Full-Stack Developer
Part I — AWS foundations
1. AWS mental model

Understand:

Accounts
Regions
Availability Zones
Resources
ARNs
AWS Console
AWS CLI
AWS SDK
Infrastructure as Code

You should eventually be comfortable doing the same operation through:

AWS Console
    ↓
AWS CLI
    ↓
AWS SDK
    ↓
Terraform / OpenTofu / CloudFormation

The big conceptual shift is that AWS isn't one server. It's a collection of infrastructure primitives that you assemble.

2. IAM — probably the most important AWS topic

Learn:

Users
Groups
Roles
Policies
Principals
Resource policies
AssumeRole
STS
Least privilege
MFA
Service-to-service authentication

Think:

WHO
can do
WHAT
to WHICH RESOURCE
under WHICH CONDITIONS

AWS now strongly recommends roles and temporary credentials rather than distributing long-lived access keys.

This becomes particularly relevant to our CI/CD discussion.

Instead of:

GitHub Secret
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...

you can eventually build:

GitHub Actions
     │
     │ OIDC
     ▼
AWS STS
     │
     ▼
Temporary IAM Role
     │
     ├── deploy container
     ├── upload assets
     └── invalidate CDN

That is a very good real-world skill.

Part II — Compute
3. EC2

Your closest existing analogue:

You know	AWS
DigitalOcean Droplet	EC2
Hetzner VPS	EC2
Proxmox VM	EC2 instance

Learn:

instance types
AMIs
SSH
EBS volumes
security groups
elastic IPs
user data
instance roles
autoscaling

Exercise:

Launch Ubuntu, install Docker, run a Nuxt application.

You'll probably immediately think:

"This is basically my Hetzner box."

Exactly.

4. Containers

You know:

Docker
Docker Compose
Dokploy

AWS equivalents become:

Docker Image
     │
     ▼
ECR
     │
     ▼
ECS
     │
     ▼
Fargate / EC2

Learn:

ECR

Container registry.

Equivalent to:

Docker Hub
GitHub Container Registry
ECS

Container orchestration.

Closest mental model:

Dokploy
but AWS-native
Fargate

Run containers without managing the EC2 machines underneath.

Then later:

EKS

AWS Kubernetes.

I would not learn EKS initially.

Learn ECS properly first.

Part III — Storage
5. S3

This one should feel familiar.

Concept	Service
Cloudflare R2	Amazon S3
MinIO	Amazon S3
Supabase Storage	roughly Amazon S3

Learn:

buckets
objects
keys
permissions
lifecycle rules
storage classes
versioning
multipart uploads
presigned URLs

Presigned URLs let your application give someone temporary permission to upload/download an object without handing them AWS credentials.

For example:

Browser
   │
   │ "I want to upload photo.jpg"
   ▼
Nuxt API
   │
   │ Generate presigned URL
   ▼
Browser ───────────────► S3
             upload

Your server never processes the 300 MB file.

That's a fantastic pattern to learn.

Part IV — Databases
6. RDS

Your existing knowledge:

Supabase PostgreSQL
managed PostgreSQL
Docker PostgreSQL

maps to:

Amazon RDS

Learn:

PostgreSQL RDS
automated backups
snapshots
read replicas
Multi-AZ
connection security
database subnet groups
connection pooling

You don't need Oracle, SQL Server, etc. initially.

Just use PostgreSQL.

7. DynamoDB

This one introduces something genuinely different.

Think:

Key-value / document database
with enormous horizontal scalability

Learn:

partition keys
sort keys
indexes
access patterns
eventual vs strong consistency
TTL
DynamoDB Streams

Don't think:

"AWS MongoDB."

Think:

"Database where schema design starts from access patterns."

That's the useful lesson.

Part V — Networking
8. VPC

This is probably where AWS will teach you the most new infrastructure concepts.

Learn:

VPC
├── public subnet
├── private subnet
├── route tables
├── Internet Gateway
├── NAT
└── security groups

Example:

Internet
   │
   ▼
Load Balancer
   │
Public subnet
   │
   ▼
ECS Application
   │
Private subnet
   │
   ▼
PostgreSQL
Private subnet

Understanding this architecture is much more valuable than memorizing AWS screens.

9. DNS + CDN
Route 53

Equivalent to:

Cloudflare DNS

Learn:

hosted zones
A/AAAA records
CNAME
alias records
routing policies
CloudFront

Equivalent conceptually to:

Cloudflare CDN

Useful architecture:

User
 │
 ▼
CloudFront
 │
 ├────► S3
 │
 └────► Application
Part VI — Serverless
10. Lambda

Closest equivalents:

Cloudflare Workers
Vercel Functions
Netlify Functions

Example:

export const handler = async (event: unknown) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "AWS"
    })
  }
}

Learn:

triggers
execution roles
cold starts
environment variables
logs
timeouts
event-driven architecture
11. API Gateway

Think:

Internet
   │
   ▼
API Gateway
   │
   ▼
Lambda

It handles HTTP/API infrastructure around your functions.

Useful to understand even if you continue preferring Nuxt/Nitro APIs.

Part VII — Authentication and secrets
12. Cognito

Conceptually:

Auth0
Clerk
Supabase Auth
Firebase Auth
        ↓
Amazon Cognito

Cognito supports user directories, OIDC/OAuth authentication and federation with other identity providers.

You don't need to love Cognito.

You should know what problem it solves.

13. Secrets Manager

This connects directly to what we were discussing earlier.

DB_PASSWORD
STRIPE_SECRET
GITHUB_TOKEN
API_KEY

becomes:

AWS Secrets Manager

Applications retrieve secrets at runtime instead of storing them in source code, and Secrets Manager supports automated rotation.

Part VIII — Observability
14. CloudWatch

Think:

logs
metrics
alerts
dashboards

CloudWatch Logs can aggregate logs from EC2, AWS services and applications into one searchable system.

Learn:

Application
   │
   ├── logs
   ├── metrics
   └── errors
       │
       ▼
CloudWatch
       │
       ▼
Alarm

For example:

HTTP 500 > 10/min
        ↓
CloudWatch Alarm
        ↓
SNS
        ↓
email
Part IX — CI/CD
15. GitHub Actions → AWS

This is where I'd combine what we've been discussing.

git push
   │
   ▼
GitHub
   │
   ▼
GitHub Actions
   │
   ├── lint
   ├── typecheck
   ├── test
   ├── build
   │
   ▼
AWS authentication
   │
   ▼
ECR
   │
   ▼
ECS

And importantly:

GitHub
   │
 OIDC
   │
   ▼
IAM Role

rather than keeping permanent AWS credentials in GitHub.

Part X — Infrastructure as Code
16. Terraform/OpenTofu

This is another skill I'd put quite high on your list.

Instead of manually creating:

S3 bucket
ECS service
database
IAM role
VPC

you describe infrastructure:

resource "aws_s3_bucket" "uploads" {
  bucket = "my-app-uploads"
}

Then:

tofu plan
tofu apply

I'd learn OpenTofu/Terraform rather than CloudFormation first because the conceptual skill transfers beyond AWS.

Final project — PrivateDrop

Here's the project I'd build.

A tiny private file/photo sharing service.

Think:

self-hosted WeTransfer + private photo album.

Something you'd genuinely keep afterward.

Features
User signs in

Upload:
photo.jpg
document.pdf
video.mp4

Organize files

Generate:
share.example.com/a8K2xy

Optional:
password
expiration date
download limit

Share link

Recipient downloads file
Architecture

I'd deliberately make it slightly more complicated than strictly necessary because the goal is learning.

                         ┌─────────────┐
                         │   Route 53  │
                         └──────┬──────┘
                                │
                                ▼
                         ┌─────────────┐
                         │ CloudFront  │
                         └──────┬──────┘
                                │
                        ┌───────┴────────┐
                        ▼                ▼

                       Nuxt              S3
                        │              files
                        │
                   API Gateway
                        │
                        ▼
                      Lambda
                        │
             ┌──────────┴──────────┐
             ▼                     ▼
         DynamoDB                 S3
         metadata                objects

Authentication:

Nuxt
 │
 ▼
Cognito

Secrets:

Lambda
 │
 ▼
Secrets Manager

Observability:

Lambda
 │
 ▼
CloudWatch

Deployment:

GitHub
 │
 ▼
GitHub Actions
 │
 ▼
IAM OIDC Role
 │
 ├── deploy Lambda
 ├── deploy Nuxt
 └── update infrastructure

Infrastructure:

OpenTofu
Interesting upload architecture

Suppose you upload:

japan-trip.zip — 3 GB

Don't do:

browser
   ↓
Nuxt
   ↓
Lambda
   ↓
S3

Instead:

Browser
   │
   │ POST /uploads
   ▼
Lambda
   │
   │ presigned URL
   ▼
Browser
   │
   │ PUT 3GB
   └──────────────────► S3

That teaches you a very common cloud architecture.

Then:

S3 ObjectCreated
        │
        ▼
      Lambda
        │
        ├── generate thumbnail
        └── store metadata

Now you've also learned event-driven architecture.

Stretch goal: run part of it with containers

After the Lambda version works, replace your API with:

Nuxt/Nitro
     │
     ▼
Docker
     │
     ▼
ECR
     │
     ▼
ECS Fargate

Now you've implemented the same application using:

Serverless
API Gateway + Lambda

and:

Containers
ECS + Fargate

That comparison would teach you far more than a dozen AWS tutorials.

Your AWS compatibility cheat sheet
What you know	AWS equivalent
Hetzner VPS	EC2
DigitalOcean Droplet	EC2
Docker	Docker
Docker Compose	ECS
Dokploy	ECS / App Runner
Docker Hub/GHCR	ECR
Cloudflare R2	S3
Cloudflare Workers	Lambda
Cloudflare CDN	CloudFront
Cloudflare DNS	Route 53
Supabase PostgreSQL	RDS PostgreSQL
Redis	ElastiCache
Supabase Auth	Cognito
GitHub Actions	CodePipeline / GitHub Actions
GitHub Secrets	Secrets Manager
Hetzner firewall	Security Groups
Virtual LAN	VPC
Uptime/logging tooling	CloudWatch
Proxmox VM	EC2
Terraform/OpenTofu	Terraform/OpenTofu

And that means you're not starting AWS from zero. You already understand probably half the concepts; AWS mostly gives them names, APIs and deeper operational controls.

Recommended order

I'd go:

IAM → EC2 → S3 → VPC → RDS → Docker/ECR → ECS → CloudWatch → Lambda → API Gateway → DynamoDB → Cognito → Terraform/OpenTofu → GitHub Actions/OIDC

And build PrivateDrop incrementally throughout the course, rather than studying 16 chapters and building something only at the end.

One important update since many tutorials are now outdated: AWS changed its Free Tier in July 2025. New customers now get US$100 in credits initially, up to another US$100 through activities, and a Free plan lasting up to six months. AWS says the Free plan won't incur charges unless you upgrade, and there are also 30+ services with always-free allowances.

That actually makes a project like this a pretty good fit: deliberately explore EC2, RDS, Lambda and the other primitives during that six-month learning window rather than trying to architect everything exclusively around historical Free Tier limits.

So does that mean that this photo gallery gui will only work for six months and then I will meet to take it down (on the free plan)

Correct — if you insist on paying $0 forever, we shouldn't design the useful version of the project around AWS resources that are only free during the six-month Free Plan.

But that's actually a useful constraint for our project.

I'd separate the learning infrastructure from the permanent application.

During the AWS course, we can intentionally deploy increasingly sophisticated versions:

EC2 → RDS → ECS/Fargate → Lambda → DynamoDB → CloudFront → S3

That lets you learn the services employers care about. Once the credits/free period ends, we tear down anything expensive.

Meanwhile, we design the final PrivateDrop/photo gallery around AWS services with ongoing free allowances where practical—or migrate its compute back to your Hetzner/Dokploy infrastructure while keeping AWS pieces that are extremely cheap.

For example, the permanent architecture could become:

Cloudflare
    │
    ▼
Hetzner + Dokploy
    │
    ├── Nuxt
    ├── PostgreSQL
    │
    └── S3 API
          │
          ▼
      S3 / R2

And that's arguably an even better final exercise: build the AWS-native architecture, understand why each service exists, then optimize the architecture for a tiny real-world workload and migrate it.

You'd come out understanding not just "I can deploy to AWS", but "I understand when AWS makes sense, what the equivalent primitives are, and how to avoid unnecessary cloud costs."

So I'd make Chapter 17: Cost Optimization & Migration an explicit final chapter: AWS Cost Explorer/budgets → identify expensive resources → redesign → migrate → destroy obsolete AWS infrastructure with OpenTofu.

That gives us a useful gallery/file-sharing app you can keep running, rather than a six-month demo.

How much space do we get for free to store files?

For Amazon S3, the ongoing Free Tier allowance is 5 GB of S3 Standard storage, plus limited request allowances and data transfer.

So for our PrivateDrop/photo gallery, 5 GB is enough for learning and a small personal collection, but not much of a long-term photo archive.

For comparison, Cloudflare R2 gives 10 GB-month of Standard storage free each month, so R2 is particularly attractive for the permanent storage layer while we use S3 during the AWS-learning phase.