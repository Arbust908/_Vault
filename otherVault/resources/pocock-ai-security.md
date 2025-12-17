
Putting AI into production comes with very real risk.

We’ve already seen real AI disasters that cost companies real money, time, embarrassment, and worse.

LLMs are probabilistic systems, not deterministic like every other tool we’re accustomed to.

But while risk is inevitable, it’s not a reason to give up on AI. Deterministic programming is risky, too! We’ve just learned how to deal with it over years of experience, with professional patterns, best practices, and tools.

Risk is a thing you can manage and design for.

The upside potential is massive and very much worth the effort!

Understanding risk is the first step to mitigating it.

And even though we’re building personal software in this next cohort-based course, I think all personal software should be a practice run for production. Safety is a habit and practice is how you build that habit.

So let’s talk about 5 AI production disasters that are somewhat unique to AI applications, and how you can (and need to!) protect against them.

Starting with….

#5: Security isn’t just for data
One unique thing about AI applications is that nearly all of them today use paid, 3rd-party services to provide model inference.

While in the safe learning environment of Build Your Own AI Personal Assistant in Typescript, you’ll be able to get started with excellent, super-cheap hosted models.

But you’re likely going to want to upgrade if you get serious! And once you do, your model of choice’s API key becomes a direct link to your credit card unless you have the right protections in place.

Even an unrelated security hole can basically give attackers a button they can press to drain your wallet by spamming your API key with LLM requests.

Rate limits (at the provider level as well as in your code base), bot protection, and basic security aren’t nice-to-haves. They’re one of the most important things you’ll do.

#4: Inefficient token usage hurts UX, and increases costs
Sending tons of unnecessary JSON between HTTP requests can make your application feel painfully slow, especially on high-latency connections.

But when working with an LLM, every single token you send costs money and adds latency.

If you’re retrieving too many documents at the wrong time, or documents that are too large, you’re basically end up burning tokens for fun.

And since tokens = $$, you’re paying more money to deliver a worse experience. Don’t do that!

#3: Poor UX stemming from a lack of visibility
Obviously, good UX matters in ALL software.

But when you press a button on most apps, the user expects the exact same thing every time. They don’t want to tinker with logs or poke around in the console like we do.

With LLMs, that expectation is flipped on its head.

For all of the power LLMs derive from their flexibility based on context, there’s a careful line to walk where the “magic” turns into “what the f is going on!?”

When building with AI, users need to see what’s happening under the hood far more than typical software.

If you’re calling a tool, you need to tell them.
You need to let them pause and resume long running tasks. You need to handle browser refreshes gracefully.
If you’re building a workflow that takes a long time, tell them upfront.
If the agent is about to do something of consequence (like editing or removing files), you need the user to know they’ll be asked for permission via a “human-in-the-loop” workflow that keeps them in control of their data and systems.
This can be hard to really understand until you’ve built something yourself, which is why my project-based learning cohorts are the best!

#2: Handling mistakes is…weird
When the deterministic software you build has errors, we have an amazing ecosystem of tools that help us spot and understand those errors so we can fix them.

But with an LLM, sometimes it just… generates garbage.

You can provide all the context you want, and still occasionally get a low-quality response. It might be incomplete or different from what you asked for, or hallucinate with confidence.

And unlike error handling in traditional deterministic software, we need more and better tools to catch and handle these kinds of mistakes.

This particular risk can be damaging for folks who don’t know how to evaluate the LLM responses on their own, or have the totally reasonable expectation of trusting software to do the same thing every time.

Remember those lawyers who thought ChatGPT was a search engine and cited hallucinated court cases that didn’t exist. Eek.

So yes, you need evals. You need guardrails.

But you also need to know what kinds of things are too high-risk to run through an LLM, and stick to deterministic software best practices for those use cases.

#1: Sometimes it just doesn’t work (the saddest)
All of the programming best practices in the world won’t stop you from wasting tons of time building something that’s just not a good fit for the intended purpose.

This is true of any software, not just AI powered software. But it’s especially true with LLMs in the mix, because it’s so easy to go fast in the wrong direction.

I’m a firm believer that NOW is the time to experiment. But good experimentation is built on having a strong understanding of the problem, and good systems design skills.

Can you design the system that works in the right collection of scenarios for your user to find it valuable?

Can you compose your tasks properly into something AI can actually handle?

Your system design skills matter more than you think.

The good news is that those skills are ALL part of the practice exercises you’ll get to go through in the cohort course I’m running from December 8-12th, Build Your Own Personal AI Assistant in Typescript, still 40% off until midnight next Monday!

Of course, knowing what can go wrong is only half the battle. So in my next email, I’ll talk about strategies and tools you can use to detect and stop AI disasters before they strike.

-Matt

PS: if you bought the recent AI SDK v5 Crash Course your $149 discount* will be applied automatically if you’re logged into the site!

*Note: if you’ve used PPP to purchase the Crash Course the discount will be your entire purchase price.