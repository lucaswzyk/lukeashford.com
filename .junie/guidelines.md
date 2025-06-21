# AI Assistant Guidelines

## Project Preferences
- Keep README.md up to date with project features and changes
- Update content in `src/content_option.js` when modifying website content
- Maintain responsive design across all pages and components
- Preserve the multi-page layout structure
- Ensure internationalization (i18n) support for all user-facing text

## Code Style
- Use functional components with React hooks instead of class components
- Follow React best practices for component structure and state management
- Use ES6+ JavaScript features (arrow functions, destructuring, etc.)
- Maintain consistent naming conventions:
  - Components: PascalCase (e.g., `HeaderMain`)
  - Files: lowercase with hyphens for multi-word (e.g., `content-section.js`)
  - Functions/variables: camelCase (e.g., `handleSubmit`)
- Keep components small and focused on a single responsibility
- Use React Router for navigation between pages
- Leverage React Bootstrap components for UI elements when appropriate
- Use Material UI components as needed, maintaining consistent styling

## Testing
- Add unit tests for new components using Jest and React Testing Library
- Write integration tests for critical user flows
- Test responsive behavior across different viewport sizes
- Ensure internationalization features work correctly in tests
- You have authorization to execute any tests without asking
- DO NOT stop trying until all tests pass

## Notes
- Keep these guidelines updated when receiving feedback
- Update README.md when features change
- Maintain EmailJS integration for the contact form
- Ensure proper error handling for all user interactions
- Optimize images and assets for web performance
- Follow accessibility best practices (WCAG guidelines)
- Use React Helmet for managing document head and SEO optimization