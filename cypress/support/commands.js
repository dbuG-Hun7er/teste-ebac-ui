import { clear } from "i/lib/inflections";

Cypress.Commands.add("preCadastro", (email, senha, nome, sobrenome) => {
  cy.get("#reg_email").type(email);
  cy.get("#reg_password").type(senha);
  cy.get(":nth-child(4) > .button").click();
  cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
  cy.get("#account_first_name").clear().type(nome);
  cy.get("#account_last_name").clear().type(sobrenome);
  cy.get(".woocommerce-Button").click();
});

Cypress.Commands.add("login", (email, senha) => {
  cy.get("#username").type("lucas.teste@teste.com");
  cy.get("#password").type("teste@123");
  cy.get(".woocommerce-form > .button").click();
});

Cypress.Commands.add("detalhesConta", (nome, sobrenome, usuario) => {
  cy.get("#account_first_name").clear().type(nome);
  cy.get("#account_last_name").clear().type(sobrenome);
  cy.get("#account_display_name").clear().type(usuario);
  cy.get(".woocommerce-Button").click();
});
