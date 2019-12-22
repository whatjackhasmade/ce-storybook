import { onError } from "apollo-link-error"
import { toast } from "react-toastify"

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    toast.error(
      "There was an error while trying to connect to the server, please try again",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
    graphQLErrors.map(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }
  if (networkError) {
    toast.error(`[Network error]: ${networkError}`, {
      position: toast.POSITION.TOP_CENTER,
    })
    console.error(`[Network err]: Message: ${networkError}`)
  }
})

export default errorLink
