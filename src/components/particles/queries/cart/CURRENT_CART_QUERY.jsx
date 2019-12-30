import gql from "graphql-tag"

export const CURRENT_CART_QUERY = gql`
  query CURRENT_CART_QUERY {
    cart {
      contents {
        nodes {
          cartKey: key
          product {
            id
            productId
            description
            image {
              mediaItemUrl
            }
            purchasable
            title: name
            shortDescription
            slug
          }
          quantity
          subtotal
          total
        }
      }
      discountTotal
      total
    }
  }
`

export default CURRENT_CART_QUERY
