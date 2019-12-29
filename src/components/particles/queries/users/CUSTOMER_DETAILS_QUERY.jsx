import gql from "graphql-tag"

export const CUSTOMER_DETAILS_QUERY = gql`
  query CUSTOMER_DETAILS_QUERY {
    customer {
      billing {
        address1
      }
      customerId
      date
      displayName
      email
      firstName
      hasCalculatedShipping
      id
      isPayingCustomer
      isVatExempt
      lastName
      lastOrder {
        billing {
          address1
        }
        cartTax
        cartHash
        couponLines {
          nodes {
            code
            coupon {
              amount
            }
          }
        }
        createdVia
        currency
        customerIpAddress
        customerNote
        customerUserAgent
        date
        dateCompleted
        datePaid
        discountTax
      }
      modified
      orderCount
      orders {
        nodes {
          date
        }
      }
      refunds {
        nodes {
          title
        }
      }
      role
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
      username
      totalSpent
    }
  }
`

export default CUSTOMER_DETAILS_QUERY
