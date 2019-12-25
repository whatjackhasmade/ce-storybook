describe("Footer Form Exists", () => {
	it("Checks that a form exits in the footer for the newsletter registration", () => {
		cy.visit("http://localhost:6006/iframe.html?id=footer--standard-footer");
		cy.get(`form`).should("exist");
	});
});
