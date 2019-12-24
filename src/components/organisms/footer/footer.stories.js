import React from "react";
import { array } from "@storybook/addon-knobs";
import { WithFigma } from "storybook-addon-figma";
import Footer from "./footer";

import knobData from "./footer.knobs.json";
const { footerNav } = knobData;

export const standardFooter = () => (
	<WithFigma
		url={
			"https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=923%3A0"
		}
	>
		<Footer
			navigation={array(footerNav.label, footerNav.default, footerNav.group)}
		/>
	</WithFigma>
);

export default {
	component: Footer,
	title: "Footer"
};
