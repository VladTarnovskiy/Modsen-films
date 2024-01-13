describe('Not Found page', () => {
  beforeEach(() => {
    cy.visit('/someAddress');
  });

  it('should contains page', () => {
    cy.contains('The page you are looking for not found!');
    cy.contains('The page you are looking for not found!');
  });

  it('go to the main page', () => {
    cy.get('[data-testid="main-page-btn"]').click();
    cy.wait(1000);
    cy.contains('ModsenFilms');
  });
});
