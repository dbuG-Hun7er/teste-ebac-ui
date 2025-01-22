/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe("Funcionalidade: Produtos", () => {
  beforeEach(() => {
    produtosPage.visitarUrl();
  });
  it("Deve selecionar um produto da lista custom commands", () => {
    cy.get(".product-block").eq(1).click();
    cy.get(".button-variable-item-Brown").should("contain", "Brown");
    //cy.get('.button-variable-item-Green').should('contain','Green')
  });
  //teste page object
  it("Deve selecionar um produto da lista pageObj", () => {
    produtosPage.buscarProdutoLista("Abominable Hoodie");
    cy.get("#tab-title-description > a").should("contain", "Descrição");
  });
  it("Deve buscar um produto com sucesso", () => {
    let produto = "Zeppelin Yoga Pant";
    produtosPage.buscarProduto(produto);
    cy.get(".product_title").should("contain", produto);
  });
  it("Deve visitar  a página do produto", () => {
    produtosPage.visitarProduto("Zeppelin Yoga Pant");
    cy.get(".product_title").should("contain", "Zeppelin Yoga Pant");
  });
  it("Deve adicionar produto ao carrinho", () => {
    let qtde = 5;
    produtosPage.visitarProduto("Ariel Roll Sleeve Sweatshirt");
    produtosPage.addProdutoCarrinho("M", "Green", qtde);
    cy.get(".woocommerce-message").should(
      "contain",
      qtde +
        " × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho."
    );
  });

  it.only("Deve adicionar produto ao carrinho buscando massa de dados", () => {
    cy.fixture("produtos").then((dados) => {
      produtosPage.visitarProduto(dados[1].nomeProduto);
      produtosPage.addProdutoCarrinho(
        dados[1].tamanho,
        dados[1].cor,
        dados[1].quantidade
      );
      cy.get(".woocommerce-message").should("contain", dados[1].nomeProduto);
    });
  });
});
