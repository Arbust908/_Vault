# Chain Starter Project

This project is a starter template for building a Nuxt application with a LangChain backend, AI integration (Ollama, OpenRouter), and Supabase persistence.

## Setup Instructions

Follow these steps to set up the project:

**1. Initialize the Nuxt Project:**

   - Open a terminal and navigate to this project directory: `cd path/to/Vault/01--Projects/chain-starter`
   - Run the following command to initialize a new Nuxt project with TypeScript:
     ```bash
     npx nuxi init .
     ```
     *(Note: Using `.` initializes the project in the current directory)*
   - When prompted, choose the following options:
     - **Package manager:** `npm` or `yarn` (your preference)
     - **TypeScript:** `Yes`
     - **Rendering mode:** `Universal` (recommended)
     - **Deployment target:** `Static/Jamstack` (for simplicity)
     - **Linting:** `ESLint`
     - **Testing:** `Vitest`
     - **UI framework:** `None` (we'll add Tailwind and Nuxt UI manually)
     - **State management:** `Pinia`
     - **Auto import components:** `Yes`

**2. Install Dependencies:**

   - After the Nuxt project is initialized, install the necessary dependencies:
     ```bash
     # Install Dev Dependencies
     npm install -D tailwindcss postcss autoprefixer @nuxtjs/tailwindcss nuxt-ui

     # Install Production Dependencies
     npm install langchain @langchain/core @langchain/community @supabase/supabase-js
     ```

**3. Configure Tailwind CSS:**

   - Run the following command to initialize Tailwind CSS for Nuxt:
     ```bash
     npx tailwindcss init -p
     ```
   - This will create `tailwind.config.js` and `postcss.config.js` files.
   - Configure `tailwind.config.js` to include the necessary paths for Nuxt components:
     ```javascript
     /** @type {import('tailwindcss').Config} */
     module.exports = {
       content: [
         "./components/**/*.{vue,js,ts}",
         "./layouts/**/*.vue",
         "./pages/**/*.vue",
         "./plugins/**/*.{js,ts}",
         "./nuxt.config.ts",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```
   - Add the `@nuxtjs/tailwindcss` and `nuxt-ui` modules to your `nuxt.config.ts`:
     ```typescript
     // nuxt.config.ts
     export default defineNuxtConfig({
       modules: [
         '@nuxtjs/tailwindcss',
         'nuxt-ui'
       ]
     })
     ```

**4. Set up Supabase:**

   - Create a new project on [https://supabase.com/](https://supabase.com/).
   - Obtain your Supabase **Project URL** and **anon key** from the Supabase dashboard (Settings -> API).
   - Create a `.env` file in the root of the project and add your Supabase credentials:
     ```env
     SUPABASE_URL=YOUR_SUPABASE_URL
     SUPABASE_KEY=YOUR_SUPABASE_ANON_KEY
     ```
   - **Important:** Add `.env` to your `.gitignore` file to avoid committing your credentials.

**5. Backend Setup (Next Steps):**

   - Set up the LangChain backend in the `server/api` directory.
   - Integrate Ollama, OpenRouter, and Supabase.
   - Develop AI tools using LangChain.
   - Integrate the backend with the Nuxt UI.

## Ideation

*(Space for adding project ideas, features, architecture notes, etc.)*
