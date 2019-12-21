import React from "react";
import { array } from "@storybook/addon-knobs";
import Cart from "./cart";

import knobData from "./cart.knobs.json";
const { cartContents } = knobData;

export const standardCart = () => (
	<Cart
		items={array(cartContents.label, cartContents.default, cartContents.group)}
	/>
);

export default {
	component: Cart,
	title: "Cart"
};
