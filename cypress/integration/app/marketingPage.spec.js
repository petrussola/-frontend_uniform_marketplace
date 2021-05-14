/* eslint-disable no-undef */
describe("Load Home Page", () => {
  it("succesfully loads", () => {
    cy.visit(Cypress.env("baseUrl"));
  });
  it("Contains page title", () => {
    cy.contains("Share Uniforms");
  });
  it("Contains main text", () => {
    cy.contains("School uniforms are expensive, and kids outgrow them.");
  });
  it("Contains image with alt text", () => {
    cy.get("img").xshould("have.attr", "alt");
  });
  it("Contains button", () => {
    cy.contains("Coming soon to your local school");
  });
  it("Contains footer", () => {
    cy.contains("2021 ShareUniform.com. All rights reserved");
  });
});
