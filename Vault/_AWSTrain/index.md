[3:59 PM, 1/22/2026] Lucas Machado: nahhh
not selfish at all
[3:59 PM, 1/22/2026] Lucas Machado: we're friends haha
[3:59 PM, 1/22/2026] Lucas Machado: it's not bad to ask that kind of stuff
even more in our area
[3:59 PM, 1/22/2026] Lucas Machado: do you have an idea about what in specifically you want for AWS?
like specific components?
[4:00 PM, 1/22/2026] Lucas Machado: I have played with AWS, but tbh I'm a little rust on that,
but at least concepts and it's main services are something that I can help or at least help on how to get the info
[4:00 PM, 1/22/2026] Lucas Machado: for AWS there's also localstack for local testing
[4:00 PM, 1/22/2026] Lucas Machado: https://github.com/localstack/localstack
[4:01 PM, 1/22/2026] Fran: The role is lead front end so I understand that s3 buckets and some way of deploying web apps
[4:02 PM, 1/22/2026] Fran: Maybe some kind of idea on managing redis
[4:02 PM, 1/22/2026] Lucas Machado: hmmm
[4:02 PM, 1/22/2026] Lucas Machado: have you seen AWS CloudFront?
[4:02 PM, 1/22/2026] Lucas Machado: it's like their CDN
[4:02 PM, 1/22/2026] Lucas Machado: usually they ask that
[4:02 PM, 1/22/2026] Fran: I have little idea how I would do to push from a cicd to a aws
[4:02 PM, 1/22/2026] Fran: have you seen AWS CloudFront?
Know the name nothing more
[4:02 PM, 1/22/2026] Lucas Machado: Hhaha no worries
[4:03 PM, 1/22/2026] Lucas Machado: I think that a good test would be to deploy an app and put it on cloudfront
[4:03 PM, 1/22/2026] Fran: Yeah I have that plan
[4:04 PM, 1/22/2026] Lucas Machado: https://chatgpt.com/share/697274b8-0328-800a-9e88-21467ea276d6
[4:07 PM, 1/22/2026] Fran: Im also learning react
[4:09 PM, 1/22/2026] Fran: https://chatgpt.com/share/697274b8-0328-800a-9e88-21467ea276d6
Awesome
[4:10 PM, 1/22/2026] Lucas Machado: ps:.
most of those resources can be done via cli.
probably all of them
[4:10 PM, 1/22/2026] Lucas Machado: if you do have gemini-cli, might worth to use it to promote / deploy your code and ask him to create a MD file with the steps of the things done
[4:11 PM, 1/22/2026] Lucas Machado: sometimes that helps me to keep it up with new tools/syntax on cli stuff
[4:11 PM, 1/22/2026] Fran: And on what we had on DIO. What were the platforms you had for observability ?
[4:12 PM, 1/22/2026] Lucas Machado: At dio we had stuff on OpenTelemetry (this one can be important for you).
And Elastic APM (tbh, Elastic APM is not that good).
[4:12 PM, 1/22/2026] Fran: if you do have gemini-cli, might worth to use it to promote / deploy your code and ask him to create a MD file with the steps of the things done
Yeah I’m paying for Claude to have it teach me and correct me on all new things in react and Next ‘cause it’s not always the same with Nuxt
[4:12 PM, 1/22/2026] Lucas Machado: I think that you can get grafana cloud, and try to add your app there
[4:12 PM, 1/22/2026] Lucas Machado: should be totally free for those tests
[4:12 PM, 1/22/2026] Lucas Machado: and at least in the places I went + the JD from the jobs I'm seeing now, they use a lot the grafana stack
[4:13 PM, 1/22/2026] Lucas Machado: Yeah I’m paying for Claude to have it teach me and correct me on all new things in react and Next ‘cause it’s not always the same with Nuxt
nice!
[4:13 PM, 1/22/2026] Lucas Machado: I think that in the end having something like a repo,
with github actions to deploy apps to cloudfront
with monitoring on grafana cloud
can be a good showcase
[4:30 PM, 1/22/2026] Lucas Machado: going to hear that in a min
[4:30 PM, 1/22/2026] Fran: Yeah no rush
[4:30 PM, 1/22/2026] Fran: But it’s a great plan to have a demo that touches all the flow
[4:31 PM, 1/22/2026] Fran: Ty for the guidance
[4:31 PM, 1/22/2026] Fran: It’s hard to study when I don’t know what I don’t know
[4:35 PM, 1/22/2026] Lucas Machado: no worries at all haha
[4:36 PM, 1/22/2026] Lucas Machado: At least one thing that seems to be common for FE opportunities (At least from what ppl tell me/I do have a couple of friends that are both FE too hah)
[4:38 PM, 1/22/2026] Lucas Machado: They say that ppl usually ask for:

1. Experience with Micro Frontend
2. Experience on optimizing performance with those famous frameworks (vue/react).
3. When related to cloud
4. - How to optimize the build time and packages and install properly packages on build to save build time
5. - How to tune CDN and use compressions like Brotli, and what to cache and for how long
6. - How to deploy their own app (Usually not fancy stuff, just use a place to deploy their app + a CDN to put it in front of it, and if you have your own domain, create the records for it).

Those are the stuff I remember from them
[4:38 PM, 1/22/2026] Lucas Machado: but besides that I can ask them too haha
[4:39 PM, 1/22/2026] Lucas Machado: 1:17
And yup.
Usually have your own app deployed (like a static app and a SSR App on AWS or CloudFront can be also some good options).
[4:41 PM, 1/22/2026] Lucas Machado: 1:17
And got it.
Yup, I also have seen that a lot for many engineers opportunity.

Like for BE (How do you architect a websocket backend handling a heavy traffic/blablabla) which they would need to explain about some memorystore like redis or whatever.
For DevOps they ask us on how to scale apps and monitor them and rollout/scale the apps.
For FE may be focused on caching strategies, compression, caching invalidation and what to cache and what to not cache.
[4:42 PM, 1/22/2026] Fran: Yeah awesome insights
[4:42 PM, 1/22/2026] Fran: They say that ppl usually ask for:

Experience with Micro Frontend
Experience on optimizing performance with those famous frameworks (vue/react).
When related to cloud
- How to optimize the build time and packages and install properly packages on build to save build time
- How to tune CDN and use compressions like Brotli, and what to cache and for how long
- How to deploy their own app (Usually not fancy stuff, just use a place to deploy their app + a CDN to put it in front of it, and if you have your own domain, create the records for it).

Those are the stuff I remember from them
This is gold
[4:45 PM, 1/22/2026] Lucas Machado: ps:.
I never ever have done FE interviews xD
but one thing I like to do and I think that can helps in general
[4:46 PM, 1/22/2026] Lucas Machado: sometimes some interviewers have no clue on what to ask.
So when I see that they mentioned that they use some tool A, B, C
And I do have knowledge on that
Sometimes I start to redirect the conversation to how I do implemented something/improved something on those related topics
[4:47 PM, 1/22/2026] Lucas Machado: dunno if it helps xD
Dunno if is common sense or not
and tbh dunno if everyone likes it.
Is just something that I do and I think that sometimes works well
[4:49 PM, 1/22/2026] Fran: Yeah makes sense and it’s a good strategy to be in the comfort zone
[5:29 PM, 1/22/2026] Fran: Quick question (if you have time) how do you do to deploy a new version of a web app with 0 down time? Or you are always going to have some downtime?
[5:52 PM, 1/22/2026] Lucas Machado: Usually the deploys from nowadays should have no downtime
[5:53 PM, 1/22/2026] Lucas Machado: If I remember correctly, if you use cloudfront, and deploy a new distribution, they deploy a new version of that into a whatever URL, make it ping/check that is fine, and after that make it forward the traffic to the new app
[5:53 PM, 1/22/2026] Lucas Machado: so no downtime expected
[5:54 PM, 1/22/2026] Lucas Machado: even for cloudrun/lambda/fargate
most of those should work in that way
[5:55 PM, 1/22/2026] Lucas Machado: just double checked.
And for cloudfront seems like it relies more on cache to serve content and shift to the new env.
but for all the other ones I mentioned this is how it work
[5:56 PM, 1/22/2026] Lucas Machado: but usually we do this strategy.

Spin up new version
run healthchecks on that
shift the traffic to new version, and just then it removes the previous version
[5:57 PM, 1/22/2026] Fran: Ok thanks
[5:58 PM, 1/22/2026] Fran: Yeah I thought that would be automated and not needing a manual load balancer

