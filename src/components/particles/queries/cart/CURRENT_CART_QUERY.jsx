import gql from "graphql-tag"

export const CURRENT_CART_QUERY = gql`
  query CURRENT_CART_QUERY {
    cart {
      contents {
        nodes {
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
          subtotal
          total
        }
      }
      total
    }
  }
`

export default CURRENT_CART_QUERY
