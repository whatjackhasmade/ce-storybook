import React from "react";

const productIncrease = (state, { key, type, value }) => {
	// Search the current state store for the product using the slug as a unique ID
	const existingProduct = state.cart.find(
		product => product.slug === value.slug
	);

	// If the product has a match then...
	if (existingProduct) {
		// Find the index in the cart key
		const existingIndex = state.cart.findIndex(
			product => product.slug === value.slug
		);
		// Create a copy of the found product by spreading the object to a constant
		const increasedItem = { ...existingProduct };
		// Increase the quantity of the new item object by 1
		increasedItem.quantity++;
		// Update the existing cart array where the item was found with the new quantity item
		state.cart[existingIndex] = increasedItem;
	}

	// If the product doesn't exist yet and doesn't match
	if (!existingProduct) {
		// Create a copy of the found product by spreading the object to a constant
		const newItem = { ...value };
		// Set the quantity to 1 as we are adding it to the cart for the first time
		newItem.quantity = 1;
		// Update state to equal the current cart contents, with the new item at the end
		state.cart = [...state.cart, newItem];
	}

	return state;
};

export default productIncrease;
