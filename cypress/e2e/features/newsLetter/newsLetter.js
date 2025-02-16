import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given("que estou na página inicial da Narwal", () =>{
    cy.visit("https://www.narwalsistemas.com.br/")
})

When("eu clico no menu Blog", () =>{
    cy.get('[class*="menu-item"]').contains('Blog').click();
})

And("eu preencho o formulário de assinatura com Nome, Email e Empresa", () =>{
    cy.get('[name="name"]').type('nome teste');
    cy.get('[name="email"]').type('teste@email.com')
    cy.get('[name="company"]').type('empresa teste')
})

And("eu clico no botão de enviar", () =>{
    cy.get('[id*="rd-button"]').contains('Enviar').click();
})

Then("vejo uma mensagem de sucesso confirmando minha assinatura", () =>{
    cy.on('window:alert', (text) => {
        expect(text).to.eq('Obrigado pela inscrição, seu e-mail já está na nossa cadência!');
      });
})
