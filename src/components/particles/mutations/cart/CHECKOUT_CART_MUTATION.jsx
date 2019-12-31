import gql from "graphql-tag"

export const CHECKOUT_CART_MUTATION = gql`
  mutation CHECKOUT_CART_MUTATION(
    $account: CreateAccountInput
    $billing: CustomerAddressInput
    $clientMutationId: String!
    $paymentMethod: String
    $paymentMethodTitle: String
    $shipToDifferentAddress: Boolean
    $shipping: CustomerAddressInput
    $shippingMethod: String
  ) {
    checkout(
      input: {
        account: $account
        billing: $billing
        clientMutationId: $clientMutationId
        paymentMethod: $paymentMethod
        paymentMethodTitle: $paymentMethodTitle
        shipToDifferentAddress: $shipToDifferentAddress
        shipping: $shipping
        shippingMethod: $shippingMethod
      }
    ) {
      clientMutationId
    }
  }
`

export default CHECKOUT_CART_MUTATION
