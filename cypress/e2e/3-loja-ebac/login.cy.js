/// <reference types="cypress" />
//massa de dados
const perfil = require("../../fixtures/perfil.json");
//teste de login loja EBAC
describe("Funcionalidade: Login", () => {
  //Hooks usando beforeeach para facilitar a rotaçao e aftereach para fazer screnshote etcs
  beforeEach(() => {
    cy.visit("/minha-conta/");
  });

  //afterEach(() => {cy.screenshot()});
  //teste de login, cenario sucesso
  it.only("Deve fazer login com sucesso", () => {
    cy.get("#username").type("lucas.teste@teste.com");
    cy.get("#password").type("teste@123");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-MyAccount-content");
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, lucas.teste (não é lucas.teste? Sair)"
    );
  });
  //teste de login, cenario usuário inválido
  it("deve exibir uma mensagem de erro ao inserir usuário inválido", () => {
    cy.get("#username").type("usuario.invalido@teste.com");
    cy.get("#password").type("teste@123");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Endereço de e-mail desconhecido."
    );
    cy.get(".woocommerce-error").should("exist");
  });
  //teste de login, cenario senha inválida
  it("Deve exibir uma mensagem de erro ao inserir senha invalida", () => {
    cy.get("#username").type("lucas.teste@teste.com");
    cy.get("#password").type("senhaInvalidade");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Erro: A senha fornecida para o e-mail lucas.teste@teste.com está incorreta. Perdeu a senha?"
    );
    cy.get(".woocommerce-error").should("exist");
  });

  it.only("Deve fazer login com sucesso - Usando massa de dados", () => {
    cy.get("#username").type(perfil.usuario);
    cy.get("#password").type(perfil.senha);
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, lucas.teste (não é lucas.teste? Sair)"
    );
  });

  it("Deve fazer login com sucesso - Usando Fixture", () => {
    cy.fixture("perfil").then((dados) => {
      cy.get("#username").type(dados.usuario);
      cy.get("#password").type(dados.senha, { log: false });
      cy.get(".woocommerce-form > .button").click();
      cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
        "contain",
        "Olá, lucas.teste (não é lucas.teste? Sair)"
      );
    });
  });

  it.only("deve fazer login com sucesso - usando comandos customizado", () => {
    cy.login("lucas.teste@teste.com", "teste@123");
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, lucas.teste (não é lucas.teste? Sair)"
    );
  });
});
