import React from "react"
import PropTypes from "prop-types"
import { useMutation } from "@apollo/react-hooks"
import { generateID } from "../../helpers"

import StyledCartItem from "./cartItem.styles"

import IconMinus from "../../../assets/images/icons/minus.svg"
import IconPlus from "../../../assets/images/icons/plus.svg"

import UPDATE_QUANTITY_MUTATION from "../../particles/mutations/cart/UPDATE_QUANTITY_MUTATION"

import ErrorMessage from "../../molecules/error-message/errorMessage"

const { number, shape, string } = PropTypes

const CartItem = node => {
  const { key, product, quantity } = node
  const { image, price, productId, title } = product

  return (
    <StyledCartItem className="cart__product product">
      {image && image.mediaItemUrl && (
        <img
          alt={`Product ${title}`}
          className="product__image"
          src={image.mediaItemUrl}
        />
      )}
      <div className="product__meta">
        <h3 className="product__title">{title}</h3>
        <span className="product__price">{price}</span>
      </div>
      {}
      <div className="product__actions">
        <CartItemRemove key={key} quantity={quantity} title={title} />
        <span className="product__quantity">{quantity}</span>
        <CartItemAdd key={key} quantity={quantity} title={title} />
      </div>
    </StyledCartItem>
  )
}

const CartItemRemove = ({ key, quantity, title }) => {
  console.log(key)

  const [removeFromCart, { data, error, loading }] = useMutation(
    UPDATE_QUANTITY_MUTATION
  )

  const variables = {
    clientMutationId: generateID("remove-from-cart"),
    items: [
      {
        key,
        quantity: quantity - 1,
      },
    ],
  }

  const decrease = e => {
    e.preventDefault()
    removeFromCart({ variables })
  }

  return (
    <>
      {error && <ErrorMessage message={error.message} />}
      <button
        className="product__decrease"
        disabled={loading || quantity < 1}
        onClick={decrease}
      >
        <span className="hide">Reduce quantity for {title}</span>
        <IconMinus />
      </button>
    </>
  )
}

const CartItemAdd = ({ key, quantity, title }) => {
  const [addToCart, { data, error, loading }] = useMutation(
    UPDATE_QUANTITY_MUTATION
  )

  const variables = {
    clientMutationId: generateID("add-to-cart"),
    items: [
      {
        key,
        quantity: quantity + 1,
      },
    ],
  }

  const increase = e => {
    e.preventDefault()
    addToCart({ variables })
  }

  return (
    <>
      {error && <ErrorMessage message={error.message} />}
      <button
        className="product__increase"
        disabled={loading}
        onClick={increase}
      >
        <span className="hide">Increase quantity for {title}</span>
        <IconPlus />
      </button>
    </>
  )
}

export default CartItem

// Expected prop values
CartItem.propTypes = {
  image: shape({
    mediaItemUrl: string.isRequired,
  }),
  price: string.isRequired,
  quantity: number.isRequired,
  slug: string.isRequired,
  title: string.isRequired,
}
