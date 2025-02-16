import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given("que estou na página inicial da Narwal", () =>{
    cy.visit("https://www.narwalsistemas.com.br/")
}) 

When("eu clico no menu Blog", () =>{
    cy.get('[class*="menu-item"]').contains('Blog').click();
})

And("eu preencho a barra de pesquisa com 'Alteração de atributos no Catálogo de Produtos: como prevenir erros'", () =>{
    cy.get('[name="s"]').type('Alteração de atributos no Catálogo de Produtos: como prevenir erros');
})

And("eu clico no botão de busca", () =>{
    cy.get('[class="elementor-search-form__submit"]').click();
})

Then("vejo o artigo 'Alteração de atributos no Catálogo de Produtos: como prevenir erros' listado nos resultados", () =>{
    cy.get('[class="title-animation-overline"]').should('have.text', 'Alteração de atributos no Catálogo de Produtos: como prevenir erros');
})
