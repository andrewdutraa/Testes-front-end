Feature: Assinatura na Newsletter da Narwal Blog

Scenario: Realizar assinatura na Newsletter
    Given que estou na página inicial da Narwal
    When eu clico no menu Blog
    And eu preencho o formulário de assinatura com Nome, Email e Empresa
    And eu clico no botão de enviar
    Then vejo uma mensagem de sucesso confirmando minha assinatura
