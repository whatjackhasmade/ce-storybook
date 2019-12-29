import gql from "graphql-tag"

export const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION(
    $clientMutationId: String!
    $productId: Int!
    $quantity: Int!
  ) {
    addToCart(
      input: {
        clientMutationId: $clientMutationId
        productId: $productId
        quantity: $quantity
      }
    ) {
      clientMutationId
      cartItem {
        quantity
        total
      }
    }
  }
`

export default ADD_TO_CART_MUTATION
