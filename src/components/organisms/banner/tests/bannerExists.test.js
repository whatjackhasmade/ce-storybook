describe("Banner Exists", () => {
  it("Checks that a standard banner renders correctly", () => {
    cy.visit("http://localhost:6006/iframe.html?id=banner--standard-banner")
    cy.get(`.banner`).should("exist")
    cy.get(`.banner__contents`).should("exist")
    cy.get(`.banner__content`).should("exist")
    cy.get(`.banner__title`).should("exist")
    cy.get(`.banner__footer`).should("exist")
  })
})
