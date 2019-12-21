import React from "react";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";

// Our custom Apollo logic for our application
import authLink from "./authLink";
import errorLink from "./errorLink";
import httpLink from "./httpLink";

const ApolloWrapper = ({ children }) => {
	const link = ApolloLink.from([errorLink, authLink.concat(httpLink)]);

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link
	});

	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
