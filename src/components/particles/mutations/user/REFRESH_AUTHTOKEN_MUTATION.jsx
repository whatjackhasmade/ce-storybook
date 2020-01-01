import gql from "graphql-tag"

export const REFRESH_AUTHTOKEN_MUTATION = gql`
  mutation REFRESH_AUTHTOKEN_MUTATION(
    $clientMutationId: String!
    $jwtRefreshToken: String!
  ) {
    refreshJwtAuthToken(
      input: {
        clientMutationId: $clientMutationId
        jwtRefreshToken: $jwtRefreshToken
      }
    ) {
      authToken
      clientMutationId
    }
  }
`

export default REFRESH_AUTHTOKEN_MUTATION
