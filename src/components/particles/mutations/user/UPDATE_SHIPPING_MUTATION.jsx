import gql from "graphql-tag"

export const UPDATE_SHIPPING_MUTATION = gql`
  mutation UPDATE_SHIPPING_MUTATION(
    $clientMutationId: String!
    $address1: String!
    $address2: String!
    $city: String!
    $company: String!
    $country: CountriesEnum!
    $email: String!
    $firstName: String!
    $lastName: String!
  ) {
    updateCustomer(
      input: {
        clientMutationId: $clientMutationId
        shipping: {
          address1: $address1
          address2: $address2
          city: $city
          company: $company
          country: $country
          email: $email
          firstName: $firstName
          lastName: $lastName
          overwrite: true
        }
      }
    ) {
      customer {
        customerId
        shipping {
          address1
          address2
          city
          company
          country
          email
          firstName
          lastName
        }
      }
    }
  }
`

export default UPDATE_SHIPPING_MUTATION
