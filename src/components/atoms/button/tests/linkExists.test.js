describe(`Linked Button Exists`, () => {
  it(`Checks that a linked button exists in our system`, () => {
    cy.visit("http://localhost:6006/iframe.html?id=button--linked-button")
    cy.get(`a`).should("exist")
  })
})
