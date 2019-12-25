import React from "react";
import { number, text } from "@storybook/addon-knobs";
import { WithFigma } from "storybook-addon-figma";
import ArchiveItem from "./archiveItem";

import knobData from "./archiveItem.knobs.json";
const { image, price, slug, title } = knobData;

export const productArchive = () => (
	<WithFigma
		url={
			"https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=967%3A32"
		}
	>
		<ArchiveItem
			image={text(image.label, image.default, image.group)}
			price={number(price.label, price.default, price.group)}
			slug={text(slug.label, slug.default, slug.group)}
			title={text(title.label, title.default, title.group)}
		/>
	</WithFigma>
);

export default {
	component: ArchiveItem,
	title: "Archive Item"
};
