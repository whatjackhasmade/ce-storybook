import ApolloClient from "apollo-boost"
import fetch from "unfetch"
import { GRAPHQL_API } from "../../../../config"
import { generateID } from "../../helpers"

import REFRESH_AUTHTOKEN_MUTATION from "../mutations/user/REFRESH_AUTHTOKEN_MUTATION"

export default async (uri, options) => {
  const initialRequest = await fetch(uri, options)
  const authTokenHasExpired = initialRequest.status === 403

  if (!authTokenHasExpired) return initialRequest

  console.log("authToken has expired, try getting a new one")
  const refreshToken = localStorage.getItem("refreshToken")

  const refreshClient = new ApolloClient({
    fetch,
    uri: GRAPHQL_API,
  })

  const { data } = await refreshClient.mutate({
    mutation: REFRESH_AUTHTOKEN_MUTATION,
    variables: {
      clientMutationId: generateID("refresh-authtoken"),
      jwtRefreshToken: refreshToken,
    },
  })
  const { refreshJwtAuthToken } = data
  const { authToken } = refreshJwtAuthToken

  if (!authToken) {
    // TODO: clear everything about the user and send them to home screen
    console.error("Could not update the authToken #1")
    return initialRequest
  }

  options.headers.authorization = `Bearer ${authToken}`
  localStorage.setItem("authToken", authToken)
  return initialRequest
}
