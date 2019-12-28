describe("Button Exists", () => {
  it("Checks that a standard button exists in our system", () => {
    cy.visit("http://localhost:6006/iframe.html?id=button--basic-button")
    cy.get(`button`).should("exist")
  })
})
