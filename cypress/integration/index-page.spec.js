describe('Index page', () => {
  beforeEach(() => {
    cy.log('Visiting http://localhost:3000');
    cy.visit('/');
  });

  it('should have products', () => {
    cy.get('[data-cy=featured-products]').find('[data-cy=product]').should('have.length', 3);
  });
});
