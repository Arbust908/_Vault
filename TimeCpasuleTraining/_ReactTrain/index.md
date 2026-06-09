# React + TypeScript + Zustand + Tailwind + Vite/Next.js Training Exercises

## Exercise 1: Personal Task Manager
**Focus: TypeScript basics, React fundamentals, Tailwind styling**

Build a todo app where you can:
- Add tasks with title and description
- Mark tasks complete/incomplete
- Delete tasks
- Filter by status (all/active/completed)

**Key learnings:**
- TypeScript interfaces for task data
- React state with `useState`
- Props typing
- Tailwind utility classes for layouts and styling
- Array methods (map, filter)

---

## Exercise 2: Habit Tracker
**Focus: Zustand for state management**

Create an app to track daily habits:
- Add/remove habits
- Mark habits as done for each day
- Show a 7-day streak calendar
- Calculate completion percentages

**Key learnings:**
- Setting up Zustand store
- Actions and selectors
- Persisting state to localStorage
- Working with dates in TypeScript
- Grid layouts with Tailwind

---

## Exercise 3: Expense Tracker
**Focus: Complex state, TypeScript generics, forms**

Build a personal finance tracker:
- Add expenses with category, amount, date
- Edit and delete expenses
- Filter by category and date range
- Show total spending by category (pie chart data)
- Monthly budget warnings

**Key learnings:**
- Zustand with TypeScript generics
- Form handling and validation
- Computed values from state
- Conditional rendering
- Date manipulation
- Tailwind forms and responsive design

---

## Exercise 4: Blog with Static Generation
**Focus: Next.js basics, App Router, Server Components**

Build a personal blog:
- Create blog posts as MDX files
- List all posts with previews
- Individual post pages with syntax highlighting
- Tags/categories for filtering
- Reading time estimation

**Key learnings:**
- Next.js App Router
- File-based routing
- Server vs Client Components
- Static Site Generation (SSG)
- Metadata API for SEO
- MDX integration
- Tailwind typography plugin

---

## Exercise 5: Product Catalog with Search
**Focus: Server actions, data fetching, caching**

Create an e-commerce product browser:
- Product listing with pagination
- Search and filter products
- Individual product detail pages
- "Favorites" list (client-side state)
- Shopping cart with Zustand

**Key learnings:**
- Server Components for data fetching
- Client Components for interactivity
- `use client` directive
- Zustand in Next.js environment
- Server Actions for search
- Next.js Image optimization
- Route handlers (API routes)
- Loading and error states

---

## Exercise 6: Recipe Book with Authentication
**Focus: Full-stack Next.js, database, auth**

Rebuild the recipe app as full-stack:
- User authentication (NextAuth.js or Clerk)
- Create/edit/delete your own recipes
- Public recipe browsing
- Save favorite recipes
- Image uploads for recipes
- Server-side search

**Key learnings:**
- NextAuth.js setup
- Protected routes and middleware
- Database integration (Prisma + SQLite/PostgreSQL)
- Server Actions for mutations
- File uploads (local or S3)
- Optimistic updates in Next.js
- Revalidation strategies
- TypeScript with Prisma

---

## Exercise 7: Real-time Collaborative Kanban
**Focus: Real-time features, WebSockets, advanced state**

Build a kanban board with live updates:
- Multiple users can view/edit simultaneously
- Real-time card movements
- User presence indicators
- Optimistic updates with rollback
- Board sharing with permissions

**Key learnings:**
- WebSockets or Pusher/Ably integration
- Real-time state synchronization
- Zustand with Next.js for global state
- Database subscriptions
- Conflict resolution strategies
- Route groups and layouts
- Parallel routes for modals

---

## Exercise 8: Full-Stack Dashboard (Capstone)
**Focus: Everything together**

Build a comprehensive dashboard that combines:
- Authentication and user profiles
- Task management (from Exercise 1)
- Analytics with charts (Server Components)
- API routes for data aggregation
- Edge functions for real-time features
- Responsive design with Tailwind

**Key learnings:**
- App architecture at scale
- Mixing Server and Client Components
- Data fetching patterns
- State management across the app
- Performance optimization
- Deployment to Vercel
- Environment variables
- Error boundaries

---

## Progressive Migration Path:

**Option A**: After Exercise 3, rebuild Exercise 2 (Habit Tracker) in Next.js to compare:
- Vite version (CSR)
- Next.js version (SSR/SSG + client state)

**Option B**: Do Exercises 1-3 in Vite, then switch to Next.js for 4-8

---

## Tips for Maximum Learning:

1. **Start simple** - Get each feature working before styling
2. **Type everything** - Don't use `any` types
3. **Refactor often** - Move repeated code into components
4. **Use Vite's HMR** - It's blazing fast, enjoy it!
5. **Commit frequently** - Practice Git workflow alongside coding

## Next.js-Specific Tips:

1. **Understand the boundary** - Know when to use Server vs Client Components
2. **Start with Server** - Use Client Components only when needed (interactivity, browser APIs, state)
3. **Zustand in Next.js** - Works great for client-side state, use Server Components for data fetching
4. **Type safety** - TypeScript shines even more with Next.js autocomplete

# Bonus Track

## Bonus Exercise 1: Pomodoro Timer with Analytics
**Focus: Side effects, intervals, data visualization**

Create a productivity timer:
- 25-min work sessions, 5-min breaks
- Pause/resume functionality
- Track completed sessions by day
- Show productivity stats (sessions per day, week)
- Category tags for sessions

**Key learnings:**
- `useEffect` for timers
- Cleanup functions
- Zustand subscriptions
- Chart/graph rendering
- Audio notifications
- Browser notifications API

---

## Bonus Exercise 2: Recipe Book & Meal Planner
**Focus: Multiple stores, advanced TypeScript, search/filter**

Build a recipe management app:
- Add recipes with ingredients, steps, tags
- Search and filter recipes
- Create weekly meal plans (drag & drop)
- Auto-generate shopping lists from meal plans
- Mark ingredients as purchased

**Key learnings:**
- Multiple Zustand stores (recipes, mealPlans, shopping)
- TypeScript unions and discriminated unions
- Complex data relationships
- Search algorithms
- Drag and drop (optional: use a library)
- Derived state across stores

---

## Bonus Exercise 3: Kanban Board
**Focus: Complex interactions, optimistic updates**

Create a project management board:
- Multiple columns (To Do, In Progress, Done, etc.)
- Drag cards between columns
- Add/edit/delete cards and columns
- Assign priority and due dates
- Filter and sort cards

**Key learnings:**
- Drag and drop with proper TypeScript typing
- Optimistic UI updates
- Complex nested state structures
- Zustand middleware
- Tailwind animations and transitions
- Keyboard shortcuts

---

## Bonus Challenge: Combine Multiple Apps

Once you've done 3-4 of these, try building a **Personal Dashboard** that combines:
- Tasks from Exercise 1
- Habits from Exercise 2
- Today's Pomodoro sessions from Bonus Exercise 1
- Today's meal plan from Bonus Exercise 2

This teaches you:
- App architecture at scale
- Shared component libraries
- Routing (add React Router)
- Module organization
- Build optimization with Vite

---
