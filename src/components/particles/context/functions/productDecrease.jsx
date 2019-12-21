import React from "react";

const productDecrease = (state, { key, type, value }) => {
	// Search the current state store for the product using the slug as a unique ID
	const existingProduct = state.cart.find(
		product => product.slug === value.slug
	);

	// If the product has a match and the quantity count is more than 1 then...
	if (existingProduct && existingProduct.quantity > 1) {
		// Find the index in the cart key
		const existingIndex = state.cart.findIndex(
			product => product.slug === value.slug
		);
		// Create a copy of the found product by spreading the object to a constant
		const decreasedItem = { ...existingProduct };
		// Decrease the quantity of the new item object by 1
		decreasedItem.quantity--;
		// Update the existing cart array where the item was found with the new quantity item
		state.cart[existingIndex] = decreasedItem;
	}

	// If the product has a match and the quantity count is less than 2 then...
	if (existingProduct && existingProduct.quantity < 2) {
		// Create a new array with objects that don't match the slug of the product provided
		const newState = state.cart.filter(product => product.slug !== value.slug);
		// Update the state cart key to equal the new state created above
		state.cart = newState;
	}

	return state;
};

export default productDecrease;
