/* eslint-disable no-undef */
describe("Load Home Page", () => {
  it("succesfully loads", () => {
    cy.visit(Cypress.env("baseUrl"));
  });
  it("Contains expected nav bar", () => {
    cy.contains("Whatever");
  });
});
