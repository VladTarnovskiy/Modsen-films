describe('Details page', () => {
  beforeEach(() => {
    cy.visit('/details/lOKASgtr6kU');
  });
  it('should contains page', () => {
    cy.get('[data-testid="details-skeleton"]');
    cy.wait(1000);
    cy.get('[data-testid="details-page"]');
  });

  it('change theme', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('[data-testid="theme-switch"]').first().click();
    cy.get('body').should('have.css', 'background-color', 'rgb(0, 128, 128)');
  });

  it('go to the main page', () => {
    cy.get('[data-testid="logo"]').click();
    cy.wait(1000);
    cy.contains('Show More');
  });
});
