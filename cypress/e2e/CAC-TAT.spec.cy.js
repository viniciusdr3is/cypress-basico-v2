<reference types="Cypress"/>

describe('Central de Atendimento ao Cliente TAT', function() {

  beforeEach(function(){ //Executa sempre esse bloco
    cy.visit('../../src/index.html') }),

  it('verifica o título da aplicação', function() {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  }),
  
//Exercicio 00 extra
  it('preenche os campos obrigatórios e envia o formulário', function(){
    const longText = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste,  '
    cy.get('#firstName').type('Vinicius')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('Vinicius@teste.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
}),

//Exercicio 02 extra
  it('Crie um teste chamado exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    cy.get('#firstName').type('Vinicius')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('sadaasdasddcom')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  //Exercicio 02 extra
  it('Crie um teste chamado exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    cy.get('#firstName').type('Vinicius')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('sadaasdasddcom')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })


  //Exercicio 03 extra
  it('campo telefone continua vazio  quando preenchido com valor nao numerico', function() {
    cy.get('#phone')
      .type('uahduash')
      .should('have.value', '')  
  })

  //Exercicio 04 extra
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    cy.get('#firstName').type('Vinicius')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('email@email.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
    })


  //Exercicio 05 extra
  it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
    cy.get('#firstName')
    .type('Vinicius')
    .should('have.value', 'Vinicius')
    .clear()
  })

  //Exercicio 06 extra
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
    cy.get('button[type="submit"]').click()
    cy.get(error).should('be.visible')
  })

    //Exercicio 07 extra
    it('envia formulario com sucesso usando comando customizado', function() {
      cy.fillMandatoryFieldsAndSubmit()
    })

//Exercicio 08
    it('seleciona um produto (Mentoria)) por seu valor (value)', () => {
      cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
    })

    //Exercicio 09
    it('seleciona um produto Blog pelo seu indice', function() {
    cy.get('#product') 
      .select(1) 
      .should('have.value', 'blog') 
    })

        //Exercicio 10
  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked')
  })

  it('marca cada tipo de atendimento', () => {
      cy.get('input[type="radio"]')
       .each(typeOfService => {
      cy.wrap(typeOfService)
      .check()
      .should('be.checked')
    })
  })
  
   it('marca ambos checkboxes, depois desmarca o ultimo', () => {
    cy.get('input[type="checkbox"]').check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
   })
   it('Exibe mensagem de erro quando o  telefone se torna obrigatorio mas nao é preenchdo', function() {
    cy.get('button[type="submit"]').click()
    cy.get(error).should('be.visible')
  })

   it('Seleciona arquivo da pasta fixtures', () => {
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
   })

   it.only('Verifica que a politica de privacidade abre em outra aba sem a necesidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
    })

    it('Acessa a pagina de Politica removendo o target e entao clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')    
      .click()
      //Verificacao
      cy.contains('h1', 'CAC TAT - Política de privacidade')
        .should('be.visible')
    })
    
}) //Fim