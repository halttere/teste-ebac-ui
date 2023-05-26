/// <reference types="cypress" />

context("funcionalidade login", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve fazer login com sucesso", () => {
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("senha123");
    cy.get(".woocommerce-form > .button").click();
  });

  it("Deve exibir uma mensagem de erro ao inserir usuário ou senha inválidos", () => {
    cy.get("#username").type("al_ebac@teste.com");
    cy.get("#password").type("senha456");
    cy.get(".woocommerce-form > .button").click();
  });
});
