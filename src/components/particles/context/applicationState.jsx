import React, { useReducer } from "react";

import ApplicationContext from "./applicationContext";

// Reducer functions / actions
import productIncrease from "./functions/productIncrease";
import productDecrease from "./functions/productDecrease";

// Create global application reducer to handle state changes
const applicationReducer = (state, action) => {
	const { key, type, value } = action;
	// Create a copy of state to prevent any chance of mutating
	const stateCopy = { ...state };

	switch (type) {
		case "productDecrease": {
			// action.value should equal our product object (price, slug, title)
			const newState = productDecrease(stateCopy, action);
			return newState;
		}
		case "productIncrease": {
			// action.value should equal our product object (price, slug, title)
			const newState = productIncrease(stateCopy, action);
			return newState;
		}

		default: {
			return stateCopy;
		}
	}
};

// Create global state provider to handle state and reducer dispatch events
const ApplicationState = ({ children }) => {
	// Our initial application state is an empty cart array
	const [state, dispatch] = useReducer(applicationReducer, {
		cart: []
	});

	return (
		<ApplicationContext.Provider value={{ state, dispatch }}>
			{children}
		</ApplicationContext.Provider>
	);
};

export default ApplicationState;
