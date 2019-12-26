describe("Slider Exist", () => {
  it("Checks that the slider component exists in our system", () => {
    cy.visit("http://localhost:6006/iframe.html?id=slider--hero-slider")
    cy.get(`.slider`).should("exist")
    cy.get(`.slider`).should("be.visible")
    cy.get(`.slider__carousel`).should("exist")
    cy.get(`.slider__carousel`).should("be.visible")
    cy.get(`.slider__footer`).should("exist")
    cy.get(`.slider__footer`).should("be.visible")
    cy.get(`.slider__pagination`).should("exist")
    cy.get(`.slider__pagination`).should("be.visible")
  })
})
