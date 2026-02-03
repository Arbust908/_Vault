# Daily Growth Management App

---
Hey Fran - nice to meet you. I'm considering building an app around my journaling book **DAILY GROWTH MAP.**
I've been building it on claude code, and as much as I like doing it, it's not really possible for me to keep a job, find the community and build the app.
I'm starting a skool with the paper journal, and I want to use that group as the beta testers

The General flow is 
1. GO through an interview with an AI chat - what are your big desired outcomes and what's holding you back
2. Build an identity around that
3. Identify limiting beliefs and permission points

Then you go into a daily exercise
1. What do you want
2. Who do you need to be
3. How does it feel?
4. Create meditation (this is where we take their profile and develop a nighttime visualization that is custom to them)
5. The next day is a feedback loop

All of the daily stuff is tracked in a calendar style and a master score for how you're on track for "manifesting the identity"

I want it to be a web app for building and testing... can just send people a text each night with their profile login.
But ideally this can also be wrapped into an iOS app.

---

My first idea is to use Expo as the main technology (powered by React) to build the app. Expo allows for easy cross-platform development, meaning we can create both web and iOS versions without having to maintain separate codebases.
We should think about the following features:
Auth
Notifications
Ai integration
Database for storing user profiles and daily entries
Test suite

---

# AmVision UI Flows
## Daily Growth Management App

views/ (Expo/React)
  ├── Home
  ├── Profile
  ├── Power
  ├── Share (Future)
  ├── Initial
  |   ├── Ambition
  |   ├── Limiting Beliefs
  |   ├── Identity ──> Guided identity (Future)
  |   └── How does it feel
  ├── Daily practice
  |   ├── What do you want right now?
  |   ├── Tonight you are (identity)
  |   ├── Your feelings
  |   └── Meditation ──> Commit to sleep
  ├── Morning feedback
  |   ├── Morning Dreams
  |   ├── Meaningful Actions
  |   └── Lock Action
  └── Summary of the day
      ├── Reframe limiting beliefs
      └── 

backend (Node.js| Express or Nitro)
  ├── Speech-to-text Service (Wisper API of AI)
  ├── Limiting Belief Reframer Service (AI)
  ├── Meditation Script Generator (AI)
  ├── Text-to-Speech Service (AI) (Meditation Audio)
  ├── User Management Service (Auth, Profiles, Stats)
  ├── Push notifications Service
  ├── Social Sharing Service (Future)
  └── Journal and data CRUD

database (Supabase)
  ├── Auth with multiple providers (Email, Google, Apple)
  ├── Users
  ├── Daily Entries
  ├── Limiting Beliefs
  ├── Meditations
  └── Stats




├
└
─

░▒▓

speech-to-text
seems to be GPT-4o-transcribe, followed by Eleven Labs, Whisper-large, and the Gemini models. All the startups and AWS/Microsoft are decent