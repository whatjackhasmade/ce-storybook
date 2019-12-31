import React from "react"
import { number, shape, string } from "prop-types"
import { useMutation } from "@apollo/react-hooks"
import { generateID } from "../../helpers"

import StyledCartItem from "./cartItem.styles"

import IconMinus from "../../../assets/images/icons/minus.svg"
import IconPlus from "../../../assets/images/icons/plus.svg"

import CURRENT_CART_QUERY from "../../particles/queries/cart/CURRENT_CART_QUERY"

import UPDATE_QUANTITY_MUTATION from "../../particles/mutations/cart/UPDATE_QUANTITY_MUTATION"

import Link from "../../atoms/link/link"

import ErrorMessage from "../../molecules/error-message/errorMessage"

const CartItem = node => {
  const { cartKey, product, quantity, subtotal } = node
  const { image, slug, title } = product

  const [updateCartQuantity, { error, loading }] = useMutation(
    UPDATE_QUANTITY_MUTATION
  )

  const updateQuantity = (e, { action, inputQuantity }) => {
    e.preventDefault()

    if (!action && !inputQuantity) return
    if (action !== "set" && action !== "increase" && action !== "decrease")
      return

    let clientMutationId = ""
    let newQuantity = quantity

    switch (action) {
      case "increase":
        clientMutationId = generateID("add-to-cart")
        newQuantity = quantity + 1
        break
      case "decrease":
        clientMutationId = generateID("remove-from-cart")
        newQuantity = quantity - 1
        break
      case "set":
        clientMutationId = generateID("set=quantity-cart")
        newQuantity = inputQuantity ? inputQuantity : quantity
        break
      default:
        break
    }

    if (
      newQuantity === 0 &&
      !window.confirm(
        `Are you sure you want to remove ${title} from your cart?`
      )
    )
      return

    const variables = {
      clientMutationId,
      items: [
        {
          key: cartKey,
          quantity: newQuantity,
        },
      ],
    }

    updateCartQuantity({
      refetchQueries: [{ query: CURRENT_CART_QUERY }],
      variables,
    })
  }

  const onQuantityScroll = e => {
    e.preventDefault()
    const { value } = e.target
    if (!value) return
    updateQuantity(e, { action: "set", inputQuantity: value })
  }

  return (
    <StyledCartItem className="product cart__product">
      {image && image.mediaItemUrl && (
        <img
          alt={`Product ${title}`}
          className="product__image"
          src={image.mediaItemUrl}
        />
      )}
      <div className="product__meta">
        <Link href={`/${slug}`}>
          <h3 className="product__title">{title}</h3>
        </Link>
        {subtotal && <span className="product__subtotal">{subtotal}</span>}
      </div>
      {error && <ErrorMessage message={error.message} />}
      <div className="product__actions">
        <button
          className="product__decrease"
          disabled={loading || quantity < 1}
          onClick={e => updateQuantity(e, { action: "decrease" })}
        >
          <span className="hide">Reduce quantity for {title}</span>
          <IconMinus />
        </button>
        <input
          className="product__quantity"
          disabled={loading}
          onChange={onQuantityScroll}
          type="number"
          value={quantity}
        />
        <button
          className="product__increase"
          disabled={loading}
          onClick={e => updateQuantity(e, { action: "increase" })}
        >
          <span className="hide">Increase quantity for {title}</span>
          <IconPlus />
        </button>
      </div>
    </StyledCartItem>
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
