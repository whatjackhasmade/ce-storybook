import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import PropTypes from "prop-types"

import StyledCart, { StyledCartToggle } from "./cart.styles.jsx"

import IconCart from "../../../assets/images/icons/shopping-cart.svg"

import CURRENT_CART_QUERY from "../../particles/queries/cart/CURRENT_CART_QUERY.jsx"

import Button from "../../atoms/button/button"

import CartItem from "../../molecules/cart-item/cartItem"
import { ErrorMessage } from "formik"

const { arrayOf, number, shape, string } = PropTypes

const Cart = ({ items }) => {
  const [isOpen, setOpen] = useState(false)

  if (!isOpen) {
    return (
      <StyledCartToggle>
        <button
          onClick={e => {
            e.preventDefault()
            setOpen(true)
          }}
        >
          <IconCart />
        </button>
      </StyledCartToggle>
    )
  }

  return <FullCart items={items} setOpen={setOpen} />
}

const FullCart = ({ items, setOpen }) => {
  const { data, error, loading } = useQuery(CURRENT_CART_QUERY)

  if (loading) return null

  return (
    <StyledCart className="cart">
      <aside className="cart__aside">
        <header className="cart__header">
          <h2 className="cart__heading">Your Cart</h2>
          {loading && <p>Loading...</p>}
          {error && <ErrorMessage messasge={error.message} />}
          {!loading && !error && data.cart.total && (
            <span className="cart__total">
              {data.cart.total}
              {parseFloat(data.cart.total.toString().substr(1)) > 100 &&
                ` + Free P&P`}
            </span>
          )}
        </header>
        {/*
					We could remove the support for `items` as a itterable key but to keep
					the component documented and updatable in storybook, we will have fallback
					support for when the application context is unavailable but items are provided.
				*/}
        <div className="cart__products">
          {data && data.cart && data.cart.contents
            ? data.cart.contents.nodes.map(product => (
                <CartItem key={product.productId} {...product} />
              ))
            : items.map(product => <CartItem {...product} />)}
        </div>
        <div className="cart__actions">
          {/* If no items are available, disable the checkout option */}
          <Button
            className="cart__checkout"
            disabled={
              (error || loading) && !data.cart && !items && !items.length
            }
            href="/checkout"
          >
            Continue to checkout
          </Button>
          <Button
            className="cart__return"
            disabled={error || loading}
            onClick={e => {
              e.preventDefault()
              setOpen(false)
            }}
            variant="tertiary"
          >
            Continue shopping
          </Button>
        </div>
      </aside>
    </StyledCart>
  )
}

Cart.propTypes = {
  items: arrayOf(
    shape({
      image: string.isRequired,
      price: number.isRequired,
      slug: string.isRequired,
      title: string.isRequired,
    })
  ).isRequired,
}

export default Cart
