import gql from "graphql-tag"

export const USER_DETAILS_QUERY = gql`
  query USER_DETAILS_QUERY($id: String!) {
    user(id: $id) {
      avatar {
        default
      }
      capKey
      capabilities
      comments {
        nodes {
          approved
        }
      }
      description
      email
      extraCapabilities
      firstName
      id
      isJwtAuthSecretRevoked
      isRestricted
      jwtAuthExpiration
    }
  }
`

export default USER_DETAILS_QUERY
