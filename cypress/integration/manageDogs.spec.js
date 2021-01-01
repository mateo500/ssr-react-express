/* eslint-disable jest/expect-expect */
/* eslint-disable consistent-return */
describe('basic functionality of manage dogs (edit, delete and search) should be working', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });

  it('main elements should be available', () => {
    cy.contains('Manage Your Dogs!').click();
    // header
    cy.get('header')
      .should('be.visible')
      .should('have.css', 'font-family')
      .should('include', 'Fredoka One');

    //footer
    cy.get('footer')
      .should('be.visible')
      .should('have.css', 'font-family')
      .should('include', 'Fredoka One');
  });

  it('should show the dogs saved in the index with likes', () => {
    cy.get('*[class^="like-button"]').each((el, index) => {
      if (index === 3) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 3) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.contains('Manage Your Dogs!').click();

    //dog cards
    cy.get('section').should('be.visible');
    cy.get('section').should('have.class', 'card');

    cy.get('*[class^="card"]').each((el) => {
      cy.wrap(el).should('be.visible');
    });

    cy.contains('Likes😍: 1')
      .should('be.visible')
      .should('have.css', 'font-family')
      .should('include', 'Fredoka One');
  });
});
