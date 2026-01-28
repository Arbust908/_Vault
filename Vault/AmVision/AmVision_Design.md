# Daily Growth Management App - Design Document

**Version:** 1.0  
**Date:** January 24, 2026  
**Project:** AmVision - Daily Growth Map  

---

## 1. Executive Summary

### 1.1 Project Overview

Daily Growth Management App is a personal transformation platform based on the DAILY GROWTH MAP journaling methodology. The app guides users through structured self-reflection, identity formation, and manifestation practices using AI-powered coaching and personalized meditation experiences.

### 1.2 Core Value Proposition

**For individuals seeking personal transformation** who struggle with clarity and consistency in their growth journey, Daily Growth Management App is a **guided manifestation and identity-building platform** that combines AI coaching, structured journaling, and personalized meditation to help users embody their desired identity and achieve meaningful outcomes.

### 1.3 Target Users

- **Primary:** Members of the DAILY GROWTH MAP Skool community (initial beta testers)
- **Secondary:** Personal development enthusiasts seeking structured journaling and manifestation practices
- **Demographics:** Adults 25-55, interested in self-improvement, mindfulness, and goal achievement

### 1.4 Success Metrics

- User engagement: Daily practice completion rate >60%
- Retention: 30-day retention >40%
- Satisfaction: NPS score >50
- Impact: Self-reported progress on identity goals >70%

---

## 2. Product Vision & Strategy

### 2.1 Product Vision

To create the world's most effective identity transformation platform by combining proven journaling methodologies with AI personalization, making personal growth practices accessible, engaging, and measurable.

### 2.2 Phased Rollout Strategy

**Phase 1: Beta Launch (Web-first)**
- Core journaling flows (Initial + Daily + Morning)
- AI meditation generation
- Basic analytics and tracking
- Text-based reminders
- Skool community integration for beta testing

**Phase 2: Feature Enhancement**
- iOS native app (Expo)
- Push notifications
- Advanced AI coaching and reframing
- Social sharing capabilities
- Enhanced meditation library

**Phase 3: Scale & Community**
- Android support
- Community features within app
- Guided identity programs
- Advanced analytics and insights
- Integration with wearables

### 2.3 Competitive Positioning

**Differentiation:**
- **Identity-first approach:** Focus on becoming rather than just doing
- **Science-backed methodology:** Based on manifestation, identity formation, and neuroplasticity
- **AI personalization:** Custom meditations and coaching based on user profile
- **Structured simplicity:** Clear daily practice without overwhelming complexity
- **Integration of evening visualization and morning feedback loop**

---

## 3. User Experience Design

### 3.1 User Journey Map

**New User Journey:**

1. **Discovery** → User joins Skool community, receives invitation link
2. **Onboarding** → Completes Initial Setup interview with AI
3. **First Practice** → Completes first Daily Practice session
4. **Morning Feedback** → Receives reminder, provides morning reflection
5. **Habit Formation** → Builds 7-day streak with daily engagement
6. **Identity Manifestation** → Sees progress tracking, feels transformation

**Daily User Journey:**

1. **Evening Reminder** → Receives text/notification reminder (8-9 PM)
2. **Daily Practice** → 10-15 minute structured journaling
3. **Meditation** → Listens to personalized meditation before sleep
4. **Sleep** → Subconscious processing overnight
5. **Morning Reminder** → Wake-up notification (7-8 AM)
6. **Morning Feedback** → 5-minute reflection on dreams and actions
7. **Day Review** → Evening check-in on meaningful actions taken

### 3.2 Information Architecture

```
Home
├── Today's Practice (if pending)
├── Streak & Progress
└── Quick Access to Profile/Power

Profile
├── My Identity Statement
├── Current Outcomes
├── Limiting Beliefs
└── Settings

Power (Analytics)
├── Daily Streak
├── Manifestation Score
├── Practice Completion
├── Identity Alignment Trend
└── Belief Reframing Progress

Initial Setup (One-time)
├── Welcome & Introduction
├── Ambition Interview (AI-guided)
├── Limiting Beliefs Identification
├── Identity Formation
└── Feelings & Visualization

Daily Practice (Evening)
├── What I Want Right Now
├── Tonight I Am... (Identity affirmation)
├── How Does It Feel?
└── Personalized Meditation

Morning Feedback
├── Dreams & Insights
├── Meaningful Actions Committed
└── Lock in Primary Action

Daily Summary
├── Actions Taken Review
├── Limiting Belief Reframe
└── Celebration & Next Steps
```

### 3.3 UI/UX Principles

**Design Philosophy:**
- **Calm & Focused:** Minimize distractions, use soothing colors and typography
- **Progressive Disclosure:** Show only what's needed at each step
- **Positive Reinforcement:** Celebrate progress and encourage consistency
- **Accessible:** WCAG 2.1 AA compliance, readable fonts, high contrast
- **Minimal Friction:** Auto-save, voice input option, quick navigation

**Visual Language:**
- **Color Palette:** 
  - Primary: Deep purple/indigo (transformation, spirituality)
  - Secondary: Soft gold (achievement, manifestation)
  - Neutrals: Warm grays, off-white backgrounds
- **Typography:** 
  - Headers: Serif font (authority, wisdom)
  - Body: Sans-serif (clarity, readability)
  - Size: Minimum 16px for body text
- **Imagery:** minimal

**Interaction Patterns:**
- **Linear flows:** Step-by-step guided experiences
- **Card-based:** Each practice step on separate screen/card
- **Gesture support:** Swipe to navigate between steps
- **Voice input:** Speech-to-text for all text fields
- **Auto-save:** Continuous saving, no manual save needed

### 3.4 Key Screens & Wireframes

**Home Screen:**
- Hero section: "Today's Practice" with progress indicator
- Secondary: Current streak, last practice summary
- Quick actions: Start Practice, View Power, Edit Profile
- Motivational quote or identity affirmation

**Initial Setup - Ambition Interview:**
- AI chat interface with conversational prompts
- Questions about desired outcomes and obstacles
- Progressive indicator showing steps completed
- Ability to edit previous responses

**Daily Practice Flow:**
- Full-screen cards for each question
- Large, easy-to-tap text input areas
- Voice input button prominently displayed
- Progress dots at top
- "Next" button appears after response
- Meditation screen with play/pause, scrubber, volume

**Morning Feedback:**
- Dream journal with speech-to-text
- Action commitment interface
- Simplified, quick-entry format
- "Lock in Action" confirmation animation

**Power Dashboard:**
- Calendar heat map showing daily completions
- Manifestation score with trend line
- Key metrics in card layout
- Expandable sections for detailed insights

---

## 4. Functional Requirements

### 4.1 Core Features

**4.1.1 User Authentication & Profile**
- Email/password registration
- Social login (Google, Apple)
- Profile creation
- Privacy settings
- Account deletion option

**4.1.2 Initial Setup Interview**
- AI-driven conversational interview
- Ability to revisit and edit responses
- AI synthesis of identity statement
- Identification of limiting beliefs
- Permission points discovery

**4.1.3 Daily Practice**
- Evening reminder delivery (configurable time)
- Guided journaling prompts:
  - What do you want right now? (specific, present)
  - Tonight you are... (identity affirmation)
  - How does it feel? (emotional visualization)
- AI meditation script generation based on:
  - User's identity statement
  - Current desires
  - Emotional state
  - Historical patterns
- Text-to-speech meditation playback
- Option to save favorite meditations
- Completion tracking

**4.1.4 Morning Feedback Loop**
- Morning reminder (configurable time)
- Dream journal entry
- Meaningful action commitment
- Primary action selection and lock-in
- Quick reflection on evening practice impact

**4.1.5 Daily Summary**
- Evening review of actions taken
- Checkboxes for committed actions
- AI-powered limiting belief reframe
- Celebration of progress
- Preparation for next cycle

**4.1.6 Analytics & Progress Tracking**
- Daily streak counter
- Calendar view of completed practices
- Manifestation score algorithm:
  - Consistency (40%): practice completion rate
  - Alignment (30%): identity affirmation strength
  - Action (30%): committed action follow-through
- Trend graphs over time
- Milestone achievements
- Export data option

**4.1.7 Notification System**
- Evening practice reminder (text/push)
- Morning feedback reminder
- Streak preservation alerts
- Milestone celebrations
- Customizable quiet hours

### 4.2 AI Integration Features

**4.2.1 Speech-to-Text**
- Voice input for all text fields
- Real-time transcription
- Language support (initially English)

**4.2.2 Limiting Belief Reframer**
- Identifies limiting beliefs from user responses
- Generates empowering reframes using AI
- Tracks belief patterns over time
- Suggests progressive belief evolution

**4.2.3 Meditation Script Generator**
- Personalized nightly meditation (5-10 minutes)
- Incorporates:
  - User's identity statement
  - Today's desires and feelings
  - Limiting belief reframes
  - Visualization techniques
- Adaptive based on user feedback

**4.2.4 Text-to-Speech for Meditation**
- High-quality voice synthesis
- Pacing and tone optimized for meditation
- Background music integration (optional)
- Downloadable meditation files

---

## 5. Technical Architecture

### 5.1 Technology Stack

**Frontend:**
- **Framework:** Expo (React Native)
- **Rationale:** Cross-platform development for web and iOS from single codebase
- **State Management:** Redux Toolkit or Zustand
- **UI Library:** React Native Paper or NativeBase
- **Navigation:** React Navigation
- **Forms:** React Hook Form
- **Styling:** Styled Components or Tailwind (NativeWind)

**Backend:**
- **Runtime:** Node.js
- **Framework:** Express.js or Nitro (if edge functions needed)
- **API Style:** RESTful with potential GraphQL for complex queries
- **Authentication:** Supabase Auth
- **File Storage:** Supabase Storage (meditation audio files)

**Database:**
- **Primary:** Supabase (PostgreSQL)
- **Rationale:** Built-in auth, real-time subscriptions, row-level security
- **Caching:** Redis (for session management, if needed)

**AI Services:**
- **LLM:** example: Claude API (Anthropic)
- **Speech-to-Text:** Whisper API (OpenAI)
- **Text-to-Speech:** ElevenLabs or OpenAI TTS
- **Rationale:** Best-in-class AI services for conversational quality

**Infrastructure:**
- **Hosting:** Vercel (frontend) + Railway/Render (backend)
- **CDN:** Cloudflare for meditation audio delivery
- **Monitoring:** Sentry for error tracking
- **Analytics:** PostHog for product analytics

**Notifications:**
- **Push:** Expo Push Notifications
- **SMS:** Twilio for text reminders
- **Email:** SendGrid for email notifications

### 5.2 System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  Web App     │  │  iOS App     │  │ Android App  │       │
│  │  (Expo Web)  │  │  (Expo)      │  │  (Future)    │       │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘       │
└─────────┼──────────────────┼──────────────────┼─────────────┘
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                    ┌────────▼─────────┐
                    │   API Gateway    │
                    │  (Express/Nitro) │
                    └────────┬─────────┘
                             │
        ┌────────────────────┼───────────────────┐
        │                    │                   │
   ┌────▼────┐        ┌──────▼──────┐     ┌──────▼──────┐
   │ Auth    │        │   AI        │     │ Notification│
   │ Service │        │  Services   │     │   Service   │
   └────┬────┘        └──────┬──────┘     └──────┬──────┘
        │                    │                   │
   ┌────▼────────────────────▼────────────────────▼────┐
   │              Supabase Backend                     │
   │  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
   │  │   Auth   │  │PostgreSQL│  │  Storage │         │
   │  └──────────┘  └──────────┘  └──────────┘         │
   └───────────────────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────┐
        │                    │                │
   ┌────▼────────┐     ┌─────▼─────┐   ┌─────▼─────┐
   │ AI Provider │     │  Whisper  │   │ ElevenLabs│
   │   API       │     │    API    │   │    API    │
   └─────────────┘     └───────────┘   └───────────┘
```

### 5.3 Database Schema

**Users Table:**
```sql
users (
  id: uuid PRIMARY KEY,
  email: text UNIQUE NOT NULL,
  created_at: timestamp,
  updated_at: timestamp,
  identity_statement: text,
  notification_preferences: jsonb,
  timezone: text,
  streak_count: integer DEFAULT 0,
  last_practice_date: date
)
```

**Desired Outcomes Table:**
```sql
desired_outcomes (
  id: uuid PRIMARY KEY,
  user_id: uuid REFERENCES users(id),
  outcome_text: text NOT NULL,
  created_at: timestamp,
  is_active: boolean DEFAULT true,
  order: integer
)
```

**Limiting Beliefs Table:**
```sql
limiting_beliefs (
  id: uuid PRIMARY KEY,
  user_id: uuid REFERENCES users(id),
  belief_text: text NOT NULL,
  reframe_text: text,
  identified_at: timestamp,
  reframed_at: timestamp,
  status: text CHECK (status IN ('identified', 'reframed', 'resolved'))
)
```

**Daily Entries Table:**
```sql
daily_entries (
  id: uuid PRIMARY KEY,
  user_id: uuid REFERENCES users(id),
  entry_date: date NOT NULL,
  created_at: timestamp,
  
  -- Evening Practice
  what_i_want: text,
  identity_tonight: text,
  how_it_feels: text,
  meditation_script: text,
  meditation_audio_url: text,
  practice_completed: boolean DEFAULT false,
  practice_completed_at: timestamp,
  
  -- Morning Feedback
  dreams_notes: text,
  meaningful_actions: jsonb, -- array of action objects
  locked_action: text,
  morning_completed: boolean DEFAULT false,
  morning_completed_at: timestamp,
  
  -- Daily Summary
  actions_taken: jsonb, -- checkboxes state
  belief_reframe: text,
  summary_completed: boolean DEFAULT false,
  summary_completed_at: timestamp,
  
  UNIQUE(user_id, entry_date)
)
```

**Meditations Table:**
```sql
meditations (
  id: uuid PRIMARY KEY,
  user_id: uuid REFERENCES users(id),
  daily_entry_id: uuid REFERENCES daily_entries(id),
  script_text: text NOT NULL,
  audio_url: text,
  duration_seconds: integer,
  created_at: timestamp,
  is_favorite: boolean DEFAULT false,
  play_count: integer DEFAULT 0,
  last_played_at: timestamp
)
```

**User Stats Table:**
```sql
user_stats (
  id: uuid PRIMARY KEY,
  user_id: uuid REFERENCES users(id),
  date: date NOT NULL,
  manifestation_score: decimal,
  consistency_score: decimal,
  alignment_score: decimal,
  action_score: decimal,
  calculated_at: timestamp,
  UNIQUE(user_id, date)
)
```

**Notifications Queue:**
```sql
notifications_queue (
  id: uuid PRIMARY KEY,
  user_id: uuid REFERENCES users(id),
  notification_type: text, -- 'evening_practice', 'morning_feedback', etc.
  scheduled_for: timestamp,
  sent_at: timestamp,
  delivery_method: text, -- 'push', 'sms', 'email'
  status: text CHECK (status IN ('pending', 'sent', 'failed'))
)
```

### 5.4 API Endpoints

**Authentication:**
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login
- `POST /auth/logout` - Logout
- `GET /auth/me` - Get current user
- `PUT /auth/profile` - Update profile

**Initial Setup:**
- `POST /setup/interview` - Submit interview responses
- `GET /setup/interview/:userId` - Get interview data
- `PUT /setup/identity` - Update identity statement
- `POST /setup/beliefs` - Add limiting beliefs

**Daily Practice:**
- `POST /daily/practice` - Submit evening practice
- `GET /daily/practice/:date` - Get practice for date
- `PUT /daily/practice/:id` - Update practice entry
- `POST /daily/meditation/generate` - Generate meditation script
- `POST /daily/meditation/audio` - Generate audio file

**Morning Feedback:**
- `POST /daily/morning` - Submit morning feedback
- `GET /daily/morning/:date` - Get morning feedback

**Daily Summary:**
- `POST /daily/summary` - Submit daily summary
- `GET /daily/summary/:date` - Get summary

**Analytics:**
- `GET /stats/streak` - Get current streak
- `GET /stats/manifestation` - Get manifestation score
- `GET /stats/calendar/:year/:month` - Get calendar data
- `GET /stats/trends` - Get trend data

**Notifications:**
- `POST /notifications/schedule` - Schedule notification
- `PUT /notifications/preferences` - Update preferences
- `GET /notifications/history` - Get notification history

**AI Services:**
- `POST /ai/transcribe` - Speech to text
- `POST /ai/reframe` - Reframe limiting belief
- `POST /ai/chat` - General AI chat (for interview)

### 5.5 Security Considerations

**Authentication & Authorization:**
- JWT tokens with refresh token rotation
- Row-level security in Supabase
- Rate limiting on all endpoints
- CSRF protection
- Secure cookie handling

**Data Protection:**
- Encryption at rest (Supabase default)
- Encryption in transit (HTTPS/TLS)
- Sensitive data (meditations, beliefs) encrypted
- PII handling compliance
- GDPR-compliant data deletion

**API Security:**
- API key rotation
- Request signing for AI services
- Input validation and sanitization
- SQL injection prevention
- XSS protection

**Privacy:**
- Minimal data collection
- Clear privacy policy
- User consent for data usage
- Anonymous analytics option
- Right to export/delete data

---

## 6. Non-Functional Requirements

### 6.1 Performance

- **Page Load Time:** <2 seconds on 3G connection
- **API Response Time:** <500ms for 95th percentile
- **Meditation Generation:** <10 seconds end-to-end
- **Audio Playback:** Instant start, no buffering
- **Offline Support:** Basic journaling available offline, sync when online

### 6.2 Scalability

- **Initial Target:** 100-500 beta users (Skool community)
- **Phase 2:** 10,000 users
- **Architecture:** Horizontally scalable backend
- **Database:** Connection pooling, query optimization
- **CDN:** Global audio delivery

### 6.3 Reliability

- **Uptime:** 99.5% target
- **Data Backup:** Daily automated backups
- **Disaster Recovery:** <24 hour recovery time
- **Error Handling:** Graceful degradation
- **Monitoring:** Real-time alerts for critical failures

### 6.4 Usability

- **Accessibility:** WCAG 2.1 AA compliance
- **Mobile-First:** Touch-optimized, thumb-friendly
- **Localization:** English initially, i18n ready
- **Onboarding:** <5 minutes to first practice
- **Help:** Contextual tooltips, FAQ, support chat

### 6.5 Compatibility

- **Web:** Chrome, Safari, Firefox, Edge (latest 2 versions)
- **iOS:** iOS 14+
- **Screen Sizes:** 320px to 2560px width
- **Responsive:** Mobile, tablet layouts

---

## 7. Business & Operational Requirements

### 7.1 Monetization Strategy

**Phase 1 (Beta):**
- Free for Skool community members
- Collect feedback and validate product-market fit

**Phase 2:**
- **Freemium Model:**
  - Free: Basic daily practice, 7-day meditation library
  - Premium ($9.99/month or $79/year):
    - Unlimited meditation library
    - Advanced analytics
    - Voice selection for meditations
    - Priority AI features
    - Export data
- **Community Upsell:** Premium Skool membership integration

**Phase 3:**
- **B2B Offerings:** Corporate wellness programs
- **Affiliate:** Partnerships with coaches, therapists

### 7.2 Support & Maintenance

**User Support:**
- In-app help documentation
- Community forum in Skool

**Maintenance:**
- Weekly bug fixes
- Continuous AI model improvements

### 7.3 Success Criteria

**Beta Launch (3 months):**
- 100+ active beta users
- >60% daily practice completion rate
- >4.0 star average rating
- <5% churn rate
- Core features stable and bug-free

---

## 8. Risk Assessment & Mitigation

### 8.1 Technical Risks

**Risk: AI API costs exceed budget**
- Mitigation: Implement caching, batch processing, usage quotas per user tier

**Risk: Expo limitations for complex features**
- Mitigation: Prototype critical features early, have native module plan

**Risk: Audio streaming performance issues**
- Mitigation: CDN setup, multiple quality options, download option

**Risk: Data loss or security breach**
- Mitigation: Automated backups, encryption, security audits, incident response plan

### 8.2 Business Risks

**Risk: Low user engagement**
- Mitigation: A/B testing, user interviews, gamification elements, community support

**Risk: Skool community doesn't adopt**
- Mitigation: Co-create with community, early access benefits, feedback loops

**Risk: Monetization fails**
- Mitigation: Test pricing, offer value before paywall, alternative revenue streams

**Risk: Competition from established apps**
- Mitigation: Focus on unique identity-first approach, community integration, superior AI personalization

### 8.3 Legal & Compliance Risks

**Risk: Privacy regulation violations (GDPR, CCPA)**
- Mitigation: Legal review, privacy-by-design, clear consent flows, data deletion capabilities

**Risk: AI-generated content liability**
- Mitigation: Disclaimers, human review for sensitive content, content filtering

**Risk: Mental health crisis scenarios**
- Mitigation: Not positioned as therapy, crisis resources available, professional referral language

---

## 9. Testing Strategy

### 9.1 Testing Approach

**Unit Testing:**
- All utility functions
- Component logic
- API endpoint handlers
- Target: >80% code coverage

**Integration Testing:**
- API endpoint flows
- Database transactions
- AI service integrations
- Authentication flows

**End-to-End Testing:**
- Critical user journeys
- Cross-browser/device testing
- Performance testing
- Accessibility testing

**User Acceptance Testing:**
- Beta user cohort testing
- Feedback sessions
- Usability testing
- A/B testing for key features

### 9.2 Test Environments

- **Development:** Local development with mocked AI services
- **Staging:** Full integration, prod-like data, AI rate limiting
- **Production:** Live environment with monitoring

### 9.3 Quality Metrics

- Zero critical bugs in production
- <5 minor bugs per release
- >95% test pass rate
- <100ms performance regression tolerance
- 100% accessibility compliance for core flows

---

## 10. Launch Plan

### 10.1 Beta Launch (Months 1-3)

**Week 1-2: Soft Launch**
- Invite 20 Skool super-users
- Daily feedback calls
- Rapid iteration on critical bugs

**Week 3-4: Expanded Beta**
- Invite 50 additional users
- Weekly feedback surveys
- Feature prioritization workshops

**Month 2-3: Open Beta**
- Open to all Skool members (target 100-200)
- Weekly newsletter with tips and updates
- Community showcase of wins
- Prepare for public launch

### 10.2 Public Launch (Month 4)

**Pre-Launch:**
- Landing page with waitlist
- Social media campaign
- Influencer partnerships
- Press kit preparation

**Launch Week:**
- Product Hunt launch
- Email waitlist conversion
- Skool community celebration event
- Limited-time founder's pricing

**Post-Launch:**
- User onboarding optimization
- Support scaling
- Feature roadmap communication
- Early user testimonials and case studies

### 10.3 Marketing & Growth

**Content Marketing:**
- Blog posts on manifestation, identity, journaling
- YouTube tutorials and testimonials
- Podcast appearances

**Community Building:**
- Skool group engagement
- Reddit presence (r/productivity, r/selfimprovement)
- Instagram inspiration posts
- User-generated content campaigns

---
