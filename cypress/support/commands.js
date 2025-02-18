Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Vinicius')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('Vinicius@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})
