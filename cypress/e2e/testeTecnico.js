describe('Teste pratico para vaga QA Junior - Teste tela de login', function() {
  
  beforeEach(function() {
    cy.visit('http://127.0.0.1:8000/')
  })
  it('validacao título da pagina', function() {
    cy.title().should('eq', 'Autenticator - Bem-vindo')
  })

  //CT01 - Validar login com acesso ao sistema com usuário e senha valido.
  it('na tela de login preenche os campos obrigatórios e envia o formulário com dados validos', function() {
    cy.get('a.btn.btn-primary[href="/accounts/login/"]').click()
    cy.get(':nth-child(2) > .form-control').type('admin')
    cy.get(':nth-child(3) > .form-control').type('admin')
    cy.get('form > .btn').click()
  })

  //CT02 - Login Acesso ao sistema com usuário e senha inválidos.
  it('tela de login preenche os campos obrigatórios e envia o formulário com dados invalidos', function() {
    cy.get('a.btn.btn-primary[href="/accounts/login/"]').click()
    cy.get(':nth-child(2) > .form-control').type('errado')
    cy.get(':nth-child(3) > .form-control').type('errado')
    cy.get('form > .btn').click()
  })

  //CT03 - Exibição correta dos dados no Dashboard após login
  it('Verificado que o nome que aparece no Dashbord é o mesmo que logou no sistema', function() {
    cy.get('a.btn.btn-primary[href="/accounts/login/"]').click()
    cy.get(':nth-child(2) > .form-control').type('admin')
      .invoke('val') // Guarda o valor digitado
      .then((usuarioDigitado) => {
    cy.get(':nth-child(3) > .form-control').type('admin')
    cy.get('form > .btn').click()
    cy.url().should('include', '/dashboard');  
    cy.get('h2.fw-bold.text-dark') 
    .should('be.visible')
    .and('contain', usuarioDigitado);  })
  })

  //CT04 - Cadastro de um novo usuário com dados validos
  it('cadastro de um novo usuario no sistema', function() {
    cy.get('.btn-outline-primary').click()
    cy.get(':nth-child(2) > .form-control').type('teste3')
    cy.get(':nth-child(3) > .form-control').type('teste3@teste.com')
    cy.get(':nth-child(4) > .form-control').type('teste3')
    cy.get('form > .btn').type('teste3')
    cy.get('form > .btn').click()
    cy.get('.alert.alert-danger').should('be.visible') //Verifica se mostra um alerta de cadastro concluido
      .and('have.class', 'text-center') 
  })

  //CT05 - Verifica se a página se ajusta corretamente em diferentes telas'
  it.only('Verifica se a página se ajusta corretamente em diferentes telas', () => {
    cy.viewport(1280, 720); // Desktop
    cy.get('#navbarNav').should('be.visible');

    cy.viewport(768, 1024); // Tablet
    cy.get('.navbar-toggler').should('be.visible');

    cy.viewport(375, 667); // Mobile
    cy.get('.navbar-toggler').click(); // Abre o menu mobile
    cy.get('.navbar-toggler').should('be.visible'); // Verifica se o menu apareceu
  });
})