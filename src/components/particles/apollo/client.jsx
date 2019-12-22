import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"

// Our custom Apollo logic for our application
import authLink from "./authLink"
import errorLink from "./errorLink"
import httpLink from "./httpLink"

const Client = () => {
  const link = ApolloLink.from([errorLink, authLink.concat(httpLink)])

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })

  return client
}

export default Client
