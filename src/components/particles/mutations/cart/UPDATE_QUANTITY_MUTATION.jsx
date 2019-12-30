import gql from "graphql-tag"

export const UPDATE_QUANTITY_MUTATION = gql`
  mutation UPDATE_QUANTITY_MUTATION(
    $clientMutationId: String!
    $items: [CartItemQuantityInput]
  ) {
    updateItemQuantities(
      input: { clientMutationId: $clientMutationId, items: $items }
    ) {
      clientMutationId
    }
  }
`

export default UPDATE_QUANTITY_MUTATION
