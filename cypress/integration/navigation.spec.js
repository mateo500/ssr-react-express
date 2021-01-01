/* eslint-disable jest/expect-expect */
describe('navigation with routing should be working', () => {
  it('routing should be working', () => {
    cy.visit('http://localhost:5000/');

    cy.contains('Find Your Dog!').click();
    cy.url().should('include', '/discover');

    cy.contains('Manage Your Dogs!').click();
    cy.url().should('include', '/manage');

    cy.contains('All Dogs').click();
    cy.url().should('include', '/');
  });
});
