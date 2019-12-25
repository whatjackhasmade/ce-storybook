// Lib to generate random stuff like email addresses and passwords
const faker = require("faker")

describe("Footer Newsletter API Live", () => {
  const randomEmail = faker.internet.email()

  it("Checks that the newsletter registration API built on Node is running and returns success HTTP status code", () => {
    cy.request("POST", `${Cypress.env("GATSBY_EXPRESS_DOMAIN")}/register`, {
      email: randomEmail,
    }).then(response => {
      expect(response.status).to.eq(200)
    })
  })
})
