# AI File Renamer App

This project is an AI-powered application for renaming files based on their content or other criteria.

## Tech Stack

*   **Framework:** [Nuxt.js](https://nuxt.com/)
*   **Database/Backend:** [Supabase](https://supabase.io/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** TypeScript/JavaScript

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or yarn package manager
*   A Supabase account and project

### Setup

1.  **Clone the repository (or initialize a new Nuxt project):**
    ```bash
    # Using npx (recommended)
    npx nuxi@latest init "AI File Renamer App"
    cd "AI File Renamer App"

    # Or clone if this becomes a Git repository
    # git clone <repository-url>
    # cd "AI File Renamer App"
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Install Nuxt Supabase and Tailwind modules:**
    ```bash
    npm install --save-dev @nuxtjs/supabase @nuxtjs/tailwindcss
    # or
    yarn add --dev @nuxtjs/supabase @nuxtjs/tailwindcss
    ```

4.  **Configure Nuxt modules:**
    Update your `nuxt.config.ts` file:
    ```typescript
    export default defineNuxtConfig({
      modules: [
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss'
      ],
      supabase: {
        // Options
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
        redirect: false, // Adjust as needed for auth
      },
      tailwindcss: {
        // Options
      }
    })
    ```

5.  **Set up environment variables:**
    Create a `.env` file in the project root and add your Supabase credentials:
    ```
    SUPABASE_URL=YOUR_SUPABASE_URL
    SUPABASE_KEY=YOUR_SUPABASE_ANON_KEY
    ```
    *Replace `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY` with your actual Supabase project URL and anon key.*

### Development

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  Open your browser to `http://localhost:3000`.

## Next Steps

*   Set up Supabase database tables for file metadata.
*   Implement file upload functionality.
*   Integrate with an AI service for file analysis/renaming suggestions.
*   Build the user interface for managing and renaming files.
*   Implement Supabase authentication if user accounts are needed.
