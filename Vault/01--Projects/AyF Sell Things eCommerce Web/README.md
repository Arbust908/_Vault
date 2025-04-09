# AyF Sell Things eCommerce Web

An eCommerce web application built with Nuxt.js, Supabase, and Tailwind CSS.

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
    npx nuxi@latest init "AyF Sell Things eCommerce Web"
    cd "AyF Sell Things eCommerce Web"

    # Or clone if this becomes a Git repository
    # git clone <repository-url>
    # cd "AyF Sell Things eCommerce Web"
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
        redirectOptions: { // Example redirect config for auth
          login: '/login',
          callback: '/confirm',
          exclude: ['/'], // Pages accessible without login
        }
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

*   **Database Schema:** Design and create Supabase tables for products, categories, users, orders, etc. Enable Row Level Security (RLS).
*   **Authentication:** Implement user signup, login, and profile management using Supabase Auth. Create necessary pages (`/login`, `/signup`, `/profile`).
*   **Product Catalog:** Build pages to display products (list view, detail view). Fetch data from Supabase.
*   **Shopping Cart:** Implement cart functionality (add, remove, update quantities). Store cart data (e.g., in localStorage or Supabase).
*   **Checkout Process:** Create checkout flow (shipping address, payment information).
*   **Payment Integration:** Integrate with a payment gateway (e.g., Stripe, PayPal). This often requires server-side logic (consider Supabase Edge Functions).
*   **Order Management:** Create tables and logic to store and display user orders.
*   **Styling:** Use Tailwind CSS to style the application components and pages.
