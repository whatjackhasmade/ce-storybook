import React from "react"
import PropTypes from "prop-types"

import IconMinus from "../../../assets/images/icons/minus.svg"
import IconPlus from "../../../assets/images/icons/plus.svg"

const { number, shape, string } = PropTypes

const CartItem = product => {
  const { image, price, quantity, title } = product

  const updateCart = (e, action) => {
    e.preventDefault()
  }

  return (
    <div className="cart__product product">
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
      <div className="product__actions">
        <button
          className="product__decrease"
          disabled={quantity < 1}
          onClick={e => updateCart(e, "productDecrease")}
        >
          <IconMinus />
        </button>
        <span className="product__quantity">{quantity}</span>
        <button
          className="product__increase"
          onClick={e => updateCart(e, "productIncrease")}
        >
          <IconPlus />
        </button>
      </div>
    </div>
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
