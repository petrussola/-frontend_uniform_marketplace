/* eslint-disable no-undef */
describe("Load Home Page", () => {
  it("succesfully loads", () => {
    cy.visit("/");
  });
  it("Contains expected nav bar", () => {
    cy.contains("Uniforms");
    cy.contains("Home");
    cy.contains("Sign In");
    cy.contains("Sign Up");
  });
});
