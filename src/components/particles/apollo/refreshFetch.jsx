import ApolloClient from "apollo-boost"
import fetch from "unfetch"
import { GRAPHQL_API } from "../../../../config"

import CREATE_CUSTOMER_MUTATION from "../mutations/user/REFRESH_AUTHTOKEN_MUTATION"

export default async (uri, options) => {
  const refreshToken = localStorage.getItem("refreshToken")

  const initialRequest = await fetch(uri, options)

  const authTokenHasExpired = initialRequest.status === 403

  if (authTokenHasExpired) {
    console.log("authToken has expired, try getting a new one")

    const client = new ApolloClient({
      fetch,
      uri: GRAPHQL_API,
    })

    const { data } = await client.mutate({
      mutation: CREATE_CUSTOMER_MUTATION,
      variables: {
        refreshToken,
      },
    })

    if (
      !data ||
      !data.refreshJwtAuthToken ||
      !data.refreshJwtAuthToken.authToken
    ) {
      // TODO: clear everything about the user
      // and send them to home screen
      console.error("Could not update the authToken #1")
      return initialRequest
    }

    const { refreshJwtAuthToken } = data
    const { authToken } = refreshJwtAuthToken

    options.headers.authorization = `Bearer ${authToken}`
    console.log("Fetch with new authToken", authToken)

    localStorage.setItem("authToken", authToken)

    return fetch(uri, options).catch(res => {
      console.error("Could not update the authToken #2")
    })
  }

  return initialRequest
}
