import React, { useState } from "react";
import PropTypes from "prop-types";
const { arrayOf, number, shape, string } = PropTypes;

import StyledCart, { StyledCartToggle } from "./cart.styles.jsx";

import IconCart from "../../../assets/images/icons/shopping-cart.svg";

import Button from "../../atoms/button/button";

import CartItem from "../../molecules/cart-item/cartItem";

const Cart = ({ items }) => {
	const [isOpen, setOpen] = useState(false);

	{
		/* Create toggle button when cart is closed */
	}
	if (!isOpen) {
		return (
			<StyledCartToggle>
				<button
					onClick={e => {
						e.preventDefault();
						setOpen(true);
					}}
				>
					<IconCart />
				</button>
			</StyledCartToggle>
		);
	}

	return (
		<StyledCart className="cart">
			<aside className="cart__aside">
				<header className="cart__header">
					<h2 className="cart__heading">Your Cart</h2>
					{/* We'll hook this up later */}
					<span className="cart__total">£0.00</span>
				</header>
				{items && items.length && (
					<div className="cart__products">
						{items.map(product => (
							<CartItem {...product} />
						))}
					</div>
				)}
				<div className="cart__actions">
					{/* We'll hook this up later */}
					<Button className="cart__checkout" disabled={true} href="/checkout">
						Continue to checkout
					</Button>
					<Button className="cart__return" onClick={setOpen(false)}>
						Continue shopping
					</Button>
				</div>
			</aside>
		</StyledCart>
	);
};

Cart.propTypes = {
	items: arrayOf(
		shape({
			image: string.isRequired,
			price: number.isRequired,
			slug: string.isRequired,
			title: string.isRequired
		})
	).isRequired
};

export default Cart;
