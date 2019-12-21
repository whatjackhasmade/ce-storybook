import React, { useState } from "react";
import PropTypes from "prop-types";
const { number, string } = PropTypes;

import IconMinus from "../../../assets/images/icons/minus.svg";
import IconPlus from "../../../assets/images/icons/plus.svg";

const CartItem = ({ image, price, slug, title }) => {
	const [quantity, setQuantity] = useState(1);

	const decrease = e => {
		e.preventDefault();
		if (quantity > 0) setQuantity(quantity - 1);
	};

	const increase = e => {
		e.preventDefault();
		setQuantity(quantity + 1);
	};

	return (
		<div className="cart__product product">
			<img
				alt={`Product image for ${title}`}
				className="product__image"
				src={image}
			/>
			<h3 className="product__title">{title}</h3>
			<span className="product__price">{price}</span>
			<div className="product__actions">
				<button
					className="product__decrease"
					disabled={quantity < 1}
					onClick={decrease}
				>
					<IconMinus />
				</button>
				<span className="product__quantity">{quantity}</span>
				<button className="product__increase" onClick={increase}>
					<IconPlus />
				</button>
			</div>
		</div>
	);
};

CartItem.propTypes = {
	image: string.isRequired,
	price: number.isRequired,
	slug: string.isRequired,
	title: string.isRequired
};

export default CartItem;
