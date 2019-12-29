import ApolloClient from "apollo-boost"
import refreshFetch from "./refreshFetch"

export const client = new ApolloClient({
  fetch: refreshFetch,
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
