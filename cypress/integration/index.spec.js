/* eslint-disable consistent-return */
/* eslint-disable jest/expect-expect */
describe('basic functionality on index (like and save) should be working', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });

  it('main elements should be available', () => {
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

    cy.get('img').should('be.visible');

    //dog cards
    cy.get('section').should('be.visible');
    cy.get('section').should('have.class', 'card');
  });

  it('likes should be working', () => {
    cy.get('*[class^="like-button"]').each((el, index) => {
      if (index === 3) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.get('*[class^="like-button"]').each((el, index) => {
      if (index === 3) {
        return false;
      }
      cy.wrap(el).should('have.class', 'like-button');
    });

    cy.get('*[class^="like-button"]').each((el, index) => {
      if (index === 3) {
        return false;
      }
      cy.wrap(el).contains('Like Doggy😍 1').should('be.visible');
    });
  });

  it('save dogs should be working', () => {
    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 3) {
        return false;
      }
      cy.wrap(el).should('have.class', 'save-button');
    });

    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 3) {
        return false;
      }
      cy.wrap(el).contains('Save Doggy👻').should('be.visible');
    });

    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 3) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 3) {
        return false;
      }
      cy.wrap(el).contains('Dog Saved!😎').should('be.visible');
    });
  });
});
