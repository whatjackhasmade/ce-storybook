describe("One Link Per Panel", () => {
	it("Checks that the panels items contains at most one link per item", () => {
		cy.visit("http://localhost:6006/iframe.html?id=panels--standard-panels");
		cy.get(`.panels`).should("exist");
		cy.get(`.panels`).should("be.visible");
		cy.get(`.panels__contents`).should("exist");
		cy.get(`.panels__contents`).should("be.visible");

		cy.get(".panels")
			.find(".panels__panel")
			.then(panels => {
				const panelsCount = Cypress.$(panels).length;
				expect(panels).to.have.length(panelsCount);

				cy.get(".panels")
					.find(".panels__panel a")
					.then(anchors => {
						expect(anchors).to.have.length(panelsCount);
					});
			});
	});
});
