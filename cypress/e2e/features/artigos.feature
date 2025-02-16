Feature: Pesquisa de artigos na Narwal Blog  

Scenario: Pesquisar um artigo específico na Narwal Blog  
    Given que estou na página inicial da Narwal
    When eu clico no menu Blog
    And eu preencho a barra de pesquisa com 'Alteração de atributos no Catálogo de Produtos: como prevenir erros'
    And eu clico no botão de busca
    Then vejo o artigo 'Alteração de atributos no Catálogo de Produtos: como prevenir erros' listado nos resultados

