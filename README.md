# F6S - Frontend Engineer Exercise

Thank you for reviewing my submission. Below, I outline the approach, tools, and decisions I made while working on this task, as well as areas I would improve if given more time.

## Summary

I am satisfied with the final outcome of this task and believe I achieved a solid result. While there are areas that could be further refined or optimized, I successfully addressed all the task requirements.

For this project, I chose to use **Vue 3** alongside **Pinia**, which serves as a modern and supported alternative to the now-outdated Vuex. The project was scaffolded using **Vite**, as I found no compelling reason to introduce Nuxt for this use case.

### Key Technical Choices
- **Language:** I opted for **TypeScript**, which I am very comfortable with, to ensure type safety and improve the development experience.
- **Styling:** I implemented a simple **CSS** structure using **SCSS** and adhered to the **BEM** methodology for clean and maintainable styles.
- **Component Naming:** Components were prefixed with `App` to indicate their project-wide significance. In a larger project, I would adapt prefixes (e.g., `Chat`) to reflect specific domains or contexts.
- **Tooltip Library:** I selected a library that supports custom Vue directives. Although I do not have a personal favorite for this task, this library stood out as a good choice for enabling flexibility and ease of use.

### Improvements with More Time

Given the limited time to complete this exercise, I prioritized functionality and delivery. Below are some areas I would refine with additional time:

1. **Error Handling**
   - Enhance error handling for failed requests (e.g., adding a new message).
   - Replace the browser `alert` with a custom UI notification or a warning banner displayed in the chat interface.
   - Add error handling for mock API calls such as `getCurrentUser` and `getMessages`.

2. **API Mocking**
   - Implement a **JSON server** to simulate API requests more realistically.
   - Integrate **Axios** as the HTTP library and structure dedicated `services` for API interactions, moving beyond simple mocked responses.

3. **User Experience (UX) Enhancements**
   - Add a loading spinner or animation for pending requests to improve visual feedback.
   - Introduce animations for creating new messages to enhance transitions and overall polish.

4. **Configuration**
   - Establish a comprehensive **ESLint/Prettier** and **TypeScript** configuration tailored for consistency and clarity.
   - Refactor the default setup provided by `npm create vite@latest` to include custom rules aligned with best practices.

5. **Code Refactoring**
   - Rename components, methods, and functions for better clarity and adherence to naming conventions.
   - Perform a thorough review of the codebase to improve maintainability and readability.

### Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

