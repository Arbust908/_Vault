#import "@preview/silver-dev-cv:1.0.2": *
#show: cv.with(
  font-type: "PT Serif",
  continue-header: "false",
  name: "Francisco Blanco",
  address: "Buenos Aires, Argentina",
  lastupdated: "true",
  date: "2026-1-20",

)
#section[About Me]
#descript[Creative, product‑minded Senior Frontend Engineer with 9+ years of experience architecting scalable platforms, browser extensions, and intuitive user interfaces. Expert in TypeScript and modern JavaScript ecosystems (React, Vue, React Native), with a proven track record of leading design system implementations, Chrome extension development (Manifest V3), and ensuring WCAG AA accessibility compliance. Specialized in robust state management, modern data-fetching patterns, and analytics-driven product development.]
#v(10pt)
#sectionsep
#section("Experience")
#job(
  position: "Front‑End Engineer (Contract)",
  institution: [Demand.io],
  location: "USA (Remote)",
  date: "Oct 2022 ‑ Present",
  description: "
    Architect and maintain SimplyCodes, a Chrome extension (70,000+ Chrome Web Store users, 4.6★) — own both the UI layer (checkout overlays, in-page widgets) and core extension logic (checkout detection, content-script injection, cross-context messaging).

    Led migration from Vue 2 to Vue 3 + Vite (Nuxt 3), reducing bundle size by 28% and first contentful paint to < 1.2s. Championed design-system adoption (Tailwind V4 + Storybook), enabling faster feature delivery with WCAG AA compliance. Managed dynamic blog content via Contentful CMS, integrating with the Nuxt frontend. Built referral tracking infrastructure and optimized conversion funnels to drive user acquisition. Led multiple A/B testing initiatives using GTM and GA4, analyzing user behavior and conversion metrics to inform product decisions. Stack: Vue, Nuxt 3, UnoCSS/TailwindCSS, TypeScript, React Native (Expo)."
)
#v(6pt)
#job(
  position: "Senior Front‑End Engineer",
  institution: "BitPatagonia",
  location: "Argentina (Remote)",
  date: "Jan 2020 ‑ Oct 2022",
  description: "
    Built front-end team from 1 to 5 developers delivering a multilingual logistics PWA processing 1k daily shipments with > 99% uptime. Developed management dashboards and metric panels using Nuxt and Next.js with SSR/SEO optimization and SQL DB integration via Express REST APIs. Implemented comprehensive analytics infrastructure using GTM and GA to track user behavior and conversion funnels. Led migration from Vue to React, improving performance and developer experience across the platform using Next.js, Redux, and Zod.",
)
#v(6pt)
#job(
  position: "Front‑End Developer (Concurrent Contract)",
  institution: "Viafoura",
  location: "Canada (Remote)",
  date: "Mar 2021 - Dec 2021",
  description: "
    Maintained and evolved Viafoura's social engagement script built in multiple technologies (Backbone in v1, Vue/Vuex in v2). Participated in brainstorming the v3 product and new features in coordination with the UI and Back-End teams.",
)
#v(6pt)
#job(
  position: "Senior Front‑End Developer (Concurrent Contract)",
  institution: "Forian",
  location: "USA (Remote)",
  date: "Jun 2020 - Mar 2021",
  description: "
    Developed and maintained the Biotrack product in open collaboration with the Back-End team. Built with Vue, TypeScript, Vuetify (WCAG & ADA accessibility), Vuex, and Vue Router, delivering features against Jira tickets from US-based Product Owners.",
)

#v(6pt)
#job(
  position: "Semi-Senior Full Stack Developer",
  institution: "Digital House",
  location: "Argentina",
  date: "Jul 2016 - Jul 2020",
  description: "
    Developed a website with a content editing system and integration with external systems, paired with an internal REST API. Laravel + SCSS / Vue + Tailwind / Node + ORM (Homemade). Prototyped and designed in Adobe XD.",
)

#sectionsep
#pagebreak()
#section("Skills")
#oneline-title-item(
  title: "Languages",
  content: [Spanish (Native), English (Fluent)],
)

#oneline-title-item(
  title: "Web Core",
  content: [TypeScript, JavaScript (ES6+), HTML5, CSS3, PHP, REST, MySQL, Git, Sass, SCSS],
)

#oneline-title-item(
  title: "Frameworks & Libraries",
  content: [React, Next.js, Vue, Nuxt 4, React Native (Expo), TanStack Query, Pinia, Zustand, Redux, Vuex, Tailwind/UnoCSS, Node.js (Express, Handlebars, Nest), Prisma ORM, Drizzle, Laravel],
)

#oneline-title-item(
  title: "Browser APIs",
  content: [Chrome Extensions (Manifest V3), Content Scripts, Service Workers, chrome.storage / runtime / tabs / scripting, WebExtensions API],
)

#oneline-title-item(
  title: "Testing & Quality",
  content: [Cypress, Playwright, Vitest, Jest, Storybook, Accessibility (WCAG AA), Auditability],
)

#oneline-title-item(
  title: "Tools",
  content: [CI/CD Pipelines, Vite, GTM, GA, PostHog, AI-assisted (Claude Code, Antigravity), Design Systems, Agile/Scrum, SEO, SSR/SSG/ISR, i18n],
)
#v(20pt)

#sectionsep
#section("Education")
#education(
  institution: [Digital House],
  major: [Full‑Stack Developer Bootcamp],
  date: "2016",
  location: "Argentina",
)

#education(
  institution: [Universidad de Palermo],
  major: [Multimedia Design – coursework],
  date: "2009 – 2013",
  location: "Argentina",
)
#v(20pt)

#sectionsep
#section("Contact")
#v(10pt)
#oneline-title-item(
  title: "Email",
  content: [me\@panchoblanco.dev],
)
#v(4pt)
#oneline-title-item(
  title: "LinkedIn",
  content: [linkedin.com/in/panchoblanco],
)
#v(4pt)
#oneline-title-item(
  title: "GitHub",
  content: [github.com/Arbust908],
)
#v(4pt)
#oneline-title-item(
  title: "Portfolio",
  content: [panchoblanco.dev],
)

#v(4pt)
#oneline-title-item(
  title: "Phone",
  content: [+54 9 11 3175 2829],
)

#sectionsep
#align(right, text(size: 0.6em, fill: luma(180))[v1.4])

#set document(author: "Fran Blanco", title: "Francisco Blanco CV")
