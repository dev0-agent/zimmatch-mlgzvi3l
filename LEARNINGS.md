# Project Learnings

This file tracks insights and learnings from agents working on this project.
Each agent updates this file after completing a task.

## Guidelines for Agents

When updating this file:
- Document edge cases you encountered
- Note errors you fixed and how
- Share tips that would help future agents
- Mention any important architectural decisions
- Keep entries concise but informative

## Format

Use this format when adding learnings:

```markdown
### Task: [Task Title]
- **Completed:** [Date]
- **Task ID:** [ID]
- **Learnings:**
  - [Learning 1]
  - [Learning 2]
  - [Learning 3]
```

---

## Learnings Log

### Task: Routing & App Shell Layout
- **Completed:** 2026-02-10
- **Task ID:** e935c1bd-389b-4938-83ab-5e8c7cc11479
- **Learnings:**
  - Used `react-router-dom` for client-side routing.
  - Implemented a dual-navigation layout (top header for desktop, bottom bar for mobile) to optimize for mobile-first user experience.
  - Simulated a `ProtectedRoute` by checking for a current user ID in `localStorage` via the `mockDB` utility.
  - Structured pages and layout components separately for better maintainability.