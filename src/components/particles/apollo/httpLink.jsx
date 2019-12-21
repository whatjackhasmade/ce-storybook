// TODO: Refactor imports
import React from "react";
import fetch from "unfetch";
import { createUploadLink } from "apollo-upload-client";

const uri = process.env.GATSBY_GRAPHQL_API
	? process.env.GATSBY_GRAPHQL_API // If available use Gatsby ENV
	: process.env.GRAPHQL_API; // Else use standard ENV

const httpLink = createUploadLink({
	fetch,
	uri
});

export default httpLink;
