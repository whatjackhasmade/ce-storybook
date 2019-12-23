import ApolloClient from "apollo-boost"
import fetch from "unfetch"

export const client = new ApolloClient({
  fetch,
  request: operation => {
    const token = localStorage.getItem("authToken")
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    })
  },
  uri: "https://celticwordpress.co.uk/graphql",
})
