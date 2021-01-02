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

    cy.contains('Likes😍: 1').each((el) => {
      cy.wrap(el)
        .should('be.visible')
        .should('have.css', 'font-family')
        .should('include', 'Fredoka One');
    });
  });

  it('should edit a dog a render the updated component', () => {
    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 1) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.contains('Manage Your Dogs!').click();

    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 1) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.get('input[name="input-edit-dog"]').type('mateo');

    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 1) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.contains('Dog Name: mateo')
      .should('be.visible')
      .should('have.css', 'font-family')
      .should('include', 'Fredoka One');
  });

  it('should delete the dog once saved', () => {
    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 1) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.contains('Manage Your Dogs!').click();

    cy.get('*[class^="delete-button"]').each((el, index) => {
      if (index === 1) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.contains("looks like you don't have dogs to manage yet")
      .should('be.visible')
      .should('have.css', 'font-family')
      .should('include', 'Fredoka One');
  });

  it("shouldn't edit the dog if nothing is typed in the input", () => {
    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 1) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.contains('Manage Your Dogs!').click();

    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 1) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.get('input[name="input-edit-dog"]');

    cy.get('*[class^="save-button"]').each((el, index) => {
      if (index === 1) {
        return false;
      }
      cy.wrap(el).click();
    });

    cy.contains('Dog Name: no name asigned yet🤓')
      .should('be.visible')
      .should('have.css', 'font-family')
      .should('include', 'Fredoka One');
  });
});
