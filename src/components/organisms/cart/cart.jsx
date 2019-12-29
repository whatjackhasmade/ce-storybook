import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import PropTypes from "prop-types"

import StyledCart, { StyledCartToggle } from "./cart.styles.jsx"

import IconCart from "../../../assets/images/icons/shopping-cart.svg"

import CURRENT_CART_QUERY from "../../particles/queries/cart/CURRENT_CART_QUERY.jsx"

import Button from "../../atoms/button/button"

import CartItem from "../../molecules/cart-item/cartItem"
import ErrorMessage from "../../molecules/error-message/errorMessage"

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

  return (
    <StyledCart className="cart">
      <aside className="cart__aside">
        <header className="cart__header">
          <h2 className="cart__heading">Your Cart</h2>
          {data && data.cart && data.cart.total && (
            <span className="cart__total">
              {data.cart.total}
              {Number(data.cart.total.replace(/[^0-9\.]+/g, "")) > 100 &&
                ` + Free P&P`}
            </span>
          )}
        </header>
        {loading && <p>Loading...</p>}
        {error && (
          <ErrorMessage isDeveloperConcern={true} message={error.message} />
        )}
        {/*
					We could remove the support for `items` as a itterable key but to keep
					the component documented and updatable in storybook, we will have fallback
					support for when the application context is unavailable but items are provided.
				*/}
        <div className="cart__products">
          {data &&
            data.cart &&
            data.cart.contents &&
            data.cart.contents.nodes &&
            data.cart.contents.nodes.length &&
            data.cart.contents.nodes.map(product => <CartItem {...product} />)}
          {!data &&
            items &&
            items.length &&
            items.map(product => <CartItem {...product} />)}
        </div>
        <div className="cart__actions">
          {/* If no items are available, disable the checkout option */}
          <Button
            className="cart__checkout"
            disabled={error || loading}
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
      price: string.isRequired,
      slug: string.isRequired,
      title: string.isRequired,
    })
  ),
}

export default Cart
