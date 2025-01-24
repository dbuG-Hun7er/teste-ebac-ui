/// <reference types="cypress" />

describe("Funcionalidade: Detalhes da conta", () => {
  beforeEach(() => {
    cy.visit("minha-conta/edit-account");
    cy.fixture("perfil").then((login) => {
      cy.login("lucas.teste@teste.com", "teste@123");
    });
  });

  it("Deve conpletar detalhes da conta com sucesso", () => {
    cy.detalhesConta("Lucas", "F de lima", "Lucas QA");
    cy.get(".woocommerce-message").should(
      "contain",
      "Detalhes da conta modificados com sucesso."
    );
  });
});
