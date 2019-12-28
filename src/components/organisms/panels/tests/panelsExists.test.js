describe("Panels Exist", () => {
  it("Checks that the panels component exists in our system", () => {
    cy.visit("http://localhost:6006/iframe.html?id=panels--standard-panels")
    cy.get(`.panels`).should("exist")
    cy.get(`.panels`).should("be.visible")
    cy.get(`.panels__contents`).should("exist")
    cy.get(`.panels__contents`).should("be.visible")
  })
})
