import React from "react"
import { number } from "prop-types"
import { useMutation } from "@apollo/react-hooks"
import { generateID } from "../../helpers"

import CURRENT_CART_QUERY from "../../particles/queries/cart/CURRENT_CART_QUERY"

import CHECKOUT_CART_MUTATION from "../../particles/mutations/cart/CHECKOUT_CART_MUTATION"

import ErrorMessage from "../../molecules/error-message/errorMessage"
import Button from "../../atoms/button/button"

const Payment = ({ children, cost }) => {
  const [updateCartQuantity, { data, error, loading }] = useMutation(
    CHECKOUT_CART_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_CART_QUERY }],
    }
  )

  const completedPayment = async () => {
    const variables = {
      clientMutationId: generateID("checkout-cart"),
    }
    await updateCartQuantity({ variables })
  }

  const handleClick = async e => {
    e.preventDefault()
    await completedPayment()
  }

  console.log({ data })
  console.log({ error })
  console.log({ loading })

  return (
    <>
      {error && <ErrorMessage error={error.message} />}
      <Button disbaled={loading} onClick={handleClick}>
        {children}
      </Button>
    </>
  )
}

Payment.propTypes = {
  children: Node,
  total: number.isRequired,
}

export default Payment
