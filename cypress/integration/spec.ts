it('smoke test', () => {
    cy.visit('/');
    cy.contains('covid19-quindio app is running!');
});
