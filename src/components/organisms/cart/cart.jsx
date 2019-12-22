import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import { calculateTotalCost } from "../../helpers.js"

import StyledCart, { StyledCartToggle } from "./cart.styles.jsx"

import IconCart from "../../../assets/images/icons/shopping-cart.svg"

import ApplicationContext from "../../particles/context/applicationContext"

import Button from "../../atoms/button/button"

import CartItem from "../../molecules/cart-item/cartItem"

const { arrayOf, number, shape, string } = PropTypes

const Cart = ({ items }) => {
  const [isOpen, setOpen] = useState(false)

  const { state } = useContext(ApplicationContext)
  // Desctructure the cart value from our context (Initially [])
  const { cart } = state

  // Create toggle button when cart is closed
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

  const total = calculateTotalCost(cart)

  return (
    <StyledCart className="cart">
      <aside className="cart__aside">
        <header className="cart__header">
          <h2 className="cart__heading">Your Cart</h2>
          {total && (
            <span className="cart__total">
              {total}
              {parseFloat(total.toString().substr(1)) > 100 && ` + Free P&P`}
            </span>
          )}
        </header>
        {/*
					We could remove the support for `items` as a itterable key but to keep
					the component documented and updatable in storybook, we will have fallback
					support for when the application context is unavailable but items are provided.
				*/}
        {((cart && cart.length) || (items && items.length)) && (
          <div className="cart__products">
            {cart && cart.length
              ? cart.map(product => <CartItem {...product} />)
              : items.map(product => <CartItem {...product} />)}
          </div>
        )}
        <div className="cart__actions">
          {/* If no items are available, disable the checkout option */}
          <Button
            className="cart__checkout"
            disabled={!cart && !cart.length && !items && !items.length}
            href="/checkout"
          >
            Continue to checkout
          </Button>
          <Button
            className="cart__return"
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
