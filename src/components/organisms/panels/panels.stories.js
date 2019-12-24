import React from "react";
import { array } from "@storybook/addon-knobs";
import { WithFigma } from "storybook-addon-figma";
import Panels from "./panels";

import knobData from "./panels.knobs.json";
const { items } = knobData;

export const standardPanels = () => (
	<WithFigma url="https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=926%3A532">
		<Panels items={array(items.label, items.default, items.group)} />
	</WithFigma>
);

export default {
	component: Panels,
	title: "Panels"
};
