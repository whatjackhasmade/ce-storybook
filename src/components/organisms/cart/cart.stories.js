import React from "react";
import { array } from "@storybook/addon-knobs";
import { WithFigma } from "storybook-addon-figma";
import Cart from "./cart";

import knobData from "./cart.knobs.json";
const { cartContents } = knobData;

export const standardCart = () => (
	<WithFigma
		url={
			"https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=967%3A32"
		}
	>
		<Cart
			items={array(
				cartContents.label,
				cartContents.default,
				cartContents.group
			)}
		/>
	</WithFigma>
);

export default {
	component: Cart,
	title: "Cart"
};
