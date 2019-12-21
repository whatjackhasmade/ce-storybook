import React, { useContext } from "react";
import PropTypes from "prop-types";
const { number, string } = PropTypes;

import IconMinus from "../../../assets/images/icons/minus.svg";
import IconPlus from "../../../assets/images/icons/plus.svg";

import ApplicationContext from "../../particles/context/applicationContext";

const CartItem = product => {
	const { image, price, quantity, slug, title } = product;
	const { dispatch } = useContext(ApplicationContext);

	const priceFormatted = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP"
	}).format(price);

	const updateCart = (e, action) => {
		e.preventDefault();
		dispatch({ key: null, type: action, value: product });
	};

	return (
		<div className="cart__product product">
			<img
				alt={`Product image for ${title}`}
				className="product__image"
				src={image}
			/>
			<div className="product__meta">
				<h3 className="product__title">{title}</h3>
				<span className="product__price">{priceFormatted}</span>
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
	);
};

export default CartItem;

// Expected prop values
CartItem.propTypes = {
	image: string.isRequired,
	price: number.isRequired,
	quantity: number.isRequired,
	slug: string.isRequired,
	title: string.isRequired
};
