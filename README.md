# ZimMatch 🇿🇼

> Connecting Zimbabweans, One Dollar at a Time.

ZimMatch is a localized dating platform concept designed for the Zimbabwean market. It demonstrates a low-bandwidth, mobile-first dating experience with a simulated integration of the local **Paynow** payment gateway for affordable $1 monthly subscriptions.

**Note:** This is a client-side demonstration (SPA). All backend logic, including database persistence and payment processing, is simulated in the browser using LocalStorage.

## Tech Stack

*   **Framework:** React + Vite
*   **Styling:** Tailwind CSS
*   **Components:** shadcn/ui
*   **State/Persistence:** LocalStorage (Simulated Backend)
*   **Icons:** Lucide React

## Features

*   **Localized Discovery:** Browse profiles with Zimbabwean locations (Harare, Bulawayo, Gweru, etc.).
*   **Simulated Paynow Integration:** Experience the flow of a $1 subscription payment without real transactions.
*   **Premium Gating:** Logic handling Free vs. Premium user capabilities.
*   **Matching System:** 'Like' and 'Pass' functionality with mock match generation.
*   **Instant Chat:** Simulated real-time messaging with matched profiles.

## Getting Started

1.  **Clone the repository**
    ```bash
    git clone <repo-url>
    cd zimmatch
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open the app**
    Visit `http://localhost:5173` in your browser.

## Project Structure

*   `/src/components`: UI components (shadcn & custom)
*   `/src/lib`: Utilities, including the `mock-db.ts` (fake database) and `paynow-simulation.ts`
*   `/src/pages`: Main route views (Discover, Matches, Subscription)

## Documentation

*   See [TASKLIST.md](./TASKLIST.md) for the development roadmap.
*   See [LEARNINGS.md](./LEARNINGS.md) for technical insights during development.
*   See [.dev0/RULES.md](./.dev0/RULES.md) for AI coding guidelines.