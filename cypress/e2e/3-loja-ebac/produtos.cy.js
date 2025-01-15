/// <reference types="cypress"/>

describe("Funcionalidade: Produtos", () => {
  beforeEach(() => {
    cy.visit("produtos");
  });
  it("Deve selecionar um produto da lista", () => {
    cy.get(".product-block").eq(1).click();
    cy.get(".button-variable-item-Brown").should("contain", "Brown");
    //cy.get('.button-variable-item-Green').should('contain','Green')
  });
});
