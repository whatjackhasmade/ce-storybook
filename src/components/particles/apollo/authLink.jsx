import React from "react";
import { setContext } from "apollo-link-context";

const authLink = setContext((_, { headers }) => ({
	headers: {
		...headers
	}
}));

export default authLink;
