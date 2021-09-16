/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Index', () => {
  it('should show the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // The header should contain a link with "Your name"
    cy.get('header a[href*="/"]').contains('Your Name');

    // The home page should contain an h1 with "Hey there,"
    cy.get('h1').contains('Hey there,');
  });
});
