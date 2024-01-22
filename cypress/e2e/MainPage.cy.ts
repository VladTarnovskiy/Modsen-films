describe('Main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should contains initial elements', () => {
    cy.get('[data-testid="card-skeleton"]').should('have.length', 16);
    cy.contains('ModsenFilms');
    cy.contains('Show More');
    cy.contains('TermsPrivacyPolicy');
    cy.wait(3000);
    cy.get('[data-testid="card"]').should('have.length', 16);
  });

  it('adding 16 more cards by click the show more button', () => {
    cy.wait(3000);
    cy.get('[data-testid="card"]').should('have.length', 16);
    cy.get('[data-testid="showMore-btn"]').click();
    cy.get('[data-testid="card-skeleton"]');
    cy.wait(3000);
    cy.get('[data-testid="card"]').should('have.length', 32);
  });

  it('change theme', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('[data-testid="theme-switch"]').first().click();
    cy.get('body').should('have.css', 'background-color', 'rgb(0, 128, 128)');
  });

  it('get the details page by clicking on the card description', () => {
    cy.wait(3000);
    cy.get('[data-testid="card-details"]').first().click();
    cy.wait(1000);
    cy.get('[data-testid="details-page"]');
  });

  it('get video modal by clicking card video and close it by clicking overlay', () => {
    cy.wait(3000);
    cy.get('[data-testid="card-video"]').first().click();
    cy.get('[data-testid="details-modal"]');
    cy.get('[data-testid="details-modal-overlay"]').click('bottomLeft');
    cy.get('[data-testid="details-modal"]').should('not.exist');
  });

  it('refresh cards after filters button clicking', () => {
    cy.get('[data-testid="filters-button"]').eq(1).click();
    cy.get('[data-testid="card-skeleton"]');
  });
});
