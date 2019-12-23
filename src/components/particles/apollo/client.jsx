import ApolloClient from "apollo-boost"
import fetch from "unfetch"

export const client = new ApolloClient({
  uri: "https://celticwordpress.co.uk/graphql",
  fetch,
})
