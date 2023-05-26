/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Funcionalidade Pré-Cadastro", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  it("Deve completar o pré cadastro com sucesso", () => {
    const user = faker.person.firstName();
    const email = faker.internet.email();

    cy.get("#reg_email").type(email);
    cy.get("#reg_password").type("!teste@teste$");
    cy.get(":nth-child(4) > .button").click();

    cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
    cy.get("#account_first_name").type(user);
    cy.get("#account_last_name").type("Aguiar");
    cy.get(".woocommerce-Button").click();
  });
});
