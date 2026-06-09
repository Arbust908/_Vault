#import "@preview/silver-dev-cv:1.0.2": *

#show: cv.with(
  font-type: "PT Serif",
  continue-header: "false",
  name: "Fran Blanco",
  address: "Buenos Aires, Argentina",
  lastupdated: "true",
  pagecount: "true",
  date: "2025-06-25",
  contacts: (
    (text: "LinkedIn", link: "https://www.linkedin.com/in/panchoblanco"),
    (text: "GitHub",  link: "https://github.com/Arbust908"),
    (text: "me@panchoblanco.dev", link: "mailto:me@panchoblanco.dev"),
  ),
)

#section[About Me]
#descript[Creative, product‑minded Front‑End Engineer with 10 years' experience building Vue / React applications at scale. Blend of UI craftsmanship and leadership—have led teams of up to 6 developers and migrated legacy stacks to modern JS-based setups that improved turn-around time and boosted conversion.]

#sectionsep
#section("Experience")

#job(
  position: "Front‑End Engineer",
  institution: [Demand.io],
  location: "USA (Remote)",
  date: "Oct 2022 ‑ Present",
  description: [
    - Spearheaded migration of core e‑commerce app from Vue 2 to Vue 3 + Vite (Nuxt 3), cutting bundle size by 28 % and reducing first contentful paint to < 1.2 s.

    - Championed design‑system adoption (Tailwind V4 + Storybook) enabling 3 squads to ship features 30 % faster with consistent WCAG AA compliance.

    - Solo handled full migration to TanStack Query with Claude Code assistance, modernizing data fetching layer across entire application.

    - Developed mobile applications using Expo under Mobile Lead supervision, serving 1k daily active users.

    - Mentored 2 junior developers; one promoted to mid‑level within 12 months.

    - Maintenance and upgrade on Multi-Language Full-stack products (PHP, jQuery 4, CSS) improving feature turn around time by 25% in ticket velocity.
  ],
)

#job(
  position: "Senior Front‑End Lead",
  institution: [BitPatagonia],
  location: "Argentina",
  date: "Jun 2020 ‑ Oct 2022",
  description: [
    - Built the front-end team from 0 to 5‑developer team delivering a multilingual logistics PWA that processed 1 k daily shipments with > 99 % uptime.

    - Devised an incremental SSR strategy with Nuxt that maintain over 90 on all Lighthouse scores.

    - Coordinated a Vue to React migration of our full web-app in less than 4 sprint cycles (2 months).
  ],
)

#job(
  position: "Front‑End Developer (Contract)",
  institution: [Viafoura],
  location: "Canada (Remote)",
  date: "Mar - Dic 2021",
  description: [
    - Modularised legacy Backbone widgets into Vue components, built into a custom built tool reducing on-client size by 60%.
  ],
)

#job(
  position: "Front‑End Developer (Contract)",
  institution: [Forian],
  location: "USA (Remote)",
  date: "Jun - Mar 2021",
  description: [
    - Full-stack work on precise math e-commerce build on multi-language stack (Laravel + Vue2)
  ],
)

#section("Skills")
#oneline-title-item(
  title: "Skills",
  content: [Vue 3 (Nuxt 4), React (Next.js), TypeScript, Tailwind CSS/UnoCSS, React Native (Expo), Vite, Vitest/Jest, Storybook, Node.js, Nest.js, PHP, Laravel , AI-assisted (Claude Code, Antigravity)],
)


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

#set document(author: "Fran Blanco", title: "Francisco Blanco CV")
