// Lib to generate random stuff like email addresses and passwords
const faker = require("faker")

describe("Footer Newsletter Signup", () => {
  const randomEmail = faker.internet.email()

  it("Signs up for a newsletter subscription with a random email address", () => {
    cy.visit("http://localhost:6006/iframe.html?id=footer--standard-footer")
    cy.get(`form`).should("exist")
    cy.get(`input[type="email"]`).type(randomEmail)
    cy.get(`form`).submit()
  })
})
