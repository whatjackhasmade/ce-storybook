import gql from "graphql-tag"

export const CREATE_CUSTOMER_MUTATION = gql`
  mutation REFRESH_AUTHTOKEN_MUTATION($refreshToken: String!) {
    refreshJwtAuthToken(
      input: { clientMutationId: "UPDATEME", jwtRefreshToken: $refreshToken }
    ) {
      authToken
      clientMutationId
    }
  }
`

export default CREATE_CUSTOMER_MUTATION
