# Task List

This file shows the current progress of all tasks in this project.
It is automatically updated by dev0 as tasks are completed.

---

## Phase 1

- [x] ⏳ **Project Scaffold & Mock Backend Service**
  Initialize the project structure. Create a `lib/store.ts` or `lib/mock-db.ts` utility that simulates a database using LocalStorage. This service should seed initial dummy data (10-20 mock profiles with Zimbabwean names/locations) and provide methods for `getUser`, `updateUser`, and `getPotentialMatches`.

- [x] ⏳ **Routing & App Shell Layout**
  Set up React Router. Create a main Layout component with a mobile-friendly bottom navigation bar (for mobile) and top header (for desktop). Define routes for `/`, `/discover`, `/matches`, `/profile`, and `/subscription`. Implement a protected route wrapper that checks for a 'logged in' state (simulated).

## Phase 2

- [ ] ⏳ **User Profile Creation & Editing**
  Build the Profile view. Create a form using `react-hook-form` and `zod` schema validation. Fields should include Name, Age, City (dropdown of major Zim cities), Bio, and an Avatar URL input. Ensure data persists to the mock DB created in Task 1.

- [ ] ⏳ **Discovery Feed UI**
  Implement the main browsing interface. Create a 'Swipe Card' or 'Grid' style view to display potential matches. Each card should show the photo, name, age, and location. Fetch data from the mock DB. Add 'Like' and 'Pass' buttons that update the user's interaction history in LocalStorage.

- [ ] ⏳ **Matching Logic Implementation**
  Implement the logic to determine a 'Match'. When the current user 'Likes' a profile, check if that mock profile 'Likes' them back (mock this logic: e.g., mock profiles have a 50% chance of auto-liking back). If a match occurs, trigger a visual 'It's a Match!' modal and save the connection.

## Phase 3

- [ ] ⏳ **Simulated Paynow Service**
  Create a `lib/paynow-simulation.ts` utility. It should have a function `initiatePayment()` that returns a promise, simulates a network delay, and returns a success/failure status. This mimics the external payment gateway interaction.

- [ ] ⏳ **Subscription UI & Payment Flow**
  Build the `/subscription` page. Display the '$1/Month' offer. When the user clicks 'Pay with Paynow', show a loading state (simulating redirect), then a mock 'Paynow Payment Page' (modal or separate route), and finally a Success page. Upon success, update the user's `isPremium` status in LocalStorage.

- [ ] ⏳ **Feature Gating**
  Implement access control based on subscription status. If a user is NOT premium, restrict them to 5 swipes per day or blur out match photos. If they try to access restricted features, redirect them to the `/subscription` page.

## Phase 4

- [ ] ⏳ **Matches List & Chat UI**
  Create the `/matches` view. List all successful matches. Clicking a match opens a chat window. The chat should support sending text messages. Mock the 'receiving' of messages using `setTimeout` to simulate the other person replying.

- [ ] ⏳ **UI Polish & Empty States**
  Add empty states for when there are no more profiles to browse or no matches yet. Improve the visual styling of the cards and buttons. Add simple transitions/animations for swiping or page navigation.

---

_Last updated by dev0 automation_
