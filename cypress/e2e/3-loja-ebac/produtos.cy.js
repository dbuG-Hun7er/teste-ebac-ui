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
  it.only("Deve buscar um produto com sucesso", () => {
    let produto = "Zeppelin Yoga Pant";
    produtosPage.buscarProduto(produto);
    cy.get(".product_title").should("contain", produto);
  });
  it("Deve visitar  a página do produto", () => {});
  it("Deve adicionar produto ao carrinho", () => {});
});
