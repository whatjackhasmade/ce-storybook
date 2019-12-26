describe("Panels Exist", () => {
  it("Checks that the panels component exists in our system", () => {
    cy.visit("http://localhost:6006/iframe.html?id=caoursel--product-carousel")
    cy.get(`.carousel`).should("exist")
    cy.get(`.carousel`).should("be.visible")
    cy.get(`.carousel__slider`).should("exist")
    cy.get(`.carousel__slider`).should("be.visible")
  })
})
