/* eslint-disable jest/expect-expect */
/* eslint-disable consistent-return */
describe('search dogs and saving them should be working', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });

  it('main elements should be available', () => {
    cy.contains('Find Your Dog!').click();
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

  it('main title should be presente', () => {
    cy.contains('Find Your Dog!').click();

    cy.get('h1')
      .should('be.visible')
      .should('have.css', 'font-family')
      .should('include', 'Fredoka One');

    cy.get('h1').contains('Dog Breeds that you may like!').should('be.visible');
  });

  it('main select should be present', () => {
    cy.contains('Find Your Dog!').click();
    cy.get('select').contains('affenpinscher').should('be.visible');
  });

  it('main button should be available to click', () => {
    cy.contains('Find Your Dog!').click();
    cy.get('*[class^="search-button"]')
      .contains('Get Lucky! 🐕')
      .should('be.visible');
  });

  it('search of dogs should be working', () => {
    cy.contains('Find Your Dog!').click();
    cy.get('*[class^="search-button"]').click();

    //dog cards
    cy.get('section').should('be.visible');
    cy.get('section').should('have.class', 'card');
    cy.get('img').should('be.visible');
  });

  it('save dogs after search should be working', () => {
    cy.contains('Find Your Dog!').click();
    cy.get('*[class^="search-button"]').click();

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
