# React Native Coding Test

## Overview

**Goal:** Build a React Native app that fetches and displays a list of items from a public API. Focus on the **list view**, but be ready to discuss a potential **single item/detail screen**.  

> **Note:** This sandbox uses **React Native Web**, so it runs in the browser. Some tools and libraries (like testing libraries) are adapted to work on the web, but the same basic principles of React Native development still apply.

You are free to choose **any library** for data fetching or state management, but you should be able to explain your choice and the trade-offs.

---

## Requirements

- **API Integration:**  
  Use [Platzi Fake API](https://fakeapi.platzi.com/en/about/introduction/) or another public API of your choice. Should you struggle there is a data dump within this repo

- **List View:**  
  - Display items in a clean, scrollable list.  s
  - Show at least an image, title, and short description.  
  - Optional: sorting, filtering, or minor enhancements.

- **Libraries:**  
  You may use any library for fetching or managing data (e.g., `axios`, `react-query`, `swr`, `redux-toolkit-query`). Be ready to explain **why you chose it**.

- **Testing:**  
  Write tests for:  
  - API calls (mocking responses)  
  - List rendering  
  - Any components or helper functions  
  > Tests can be written with web-friendly tools like `@testing-library/react` or `jest`, but the same core React Native principles should apply.

- **Code Quality:**  
  Use component-based architecture, reusable functions, readable code.

---

## Instructions

1. Fork the provided [CodeSandbox template](#) to create your own copy.  
2. Implement the **list view** using the chosen API.  
3. Write tests for all components and functions.  
4. Be prepared to **explain your choice of libraries** for fetching or managing data.  
5. Share the forked sandbox link.  
6. Answer the **discussion questions** below in a README or separate file.

---

## Discussion Questions

These questions are meant to help us understand your thinking and approach. You don’t need to implement them—just describe your ideas.

1. **Single Item / Detail Screen**  
   Imagine we want to add a **detail screen** for a single item (e.g., price, description, stats). How would you structure this in React Native? Consider:  
   - Navigation strategy (stack navigator, modal, etc.)  
   - Data fetching strategy (reuse list data vs. separate API call)  
   - Component architecture

2. **Workflow, Team Collaboration & AI**  
   With a team expanding from 1 to 4, how would you modify the workflow? Consider:  
   - Branching strategy  
   - Pull requests / code review  
   - Task assignment  
   - How AI tools (e.g., code generation, linting assistants, testing helpers) could be incorporated to improve productivity, code quality, or onboarding

3. **Library Choice**  
   Why did you choose the data-fetching library you used? What are the trade-offs compared to alternatives?

4. **Releasing Breaking Changes**  
   Suppose the API response structure changes (breaking change). How would you release it safely?

---

## Evaluation Criteria

- **Technical Skills:** React Native components, hooks, state management, API integration, test coverage.  
- **Creativity & Problem-Solving:** Optional enhancements, thoughtful answers to discussion questions.  
- **Library Judgment:** Ability to choose appropriate libraries and explain trade-offs.  
- **Architecture & Maintainability:** Component separation, reusable functions, scalability considerations.  
- **Workflow Awareness:** Understanding of collaboration, branching, and safe releases.
