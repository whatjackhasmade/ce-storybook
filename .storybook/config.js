import React from "react";
import { addDecorator } from "@storybook/react";
import { configure } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/components/particles/GlobalStyle";
import ThemeDefault from "../src/components/particles/ThemeDefault";

// automatically import all files ending in *.stories.js
configure(require.context("../src/components", true, /\.stories\.js$/), module);

const GlobalDecorator = storyFn => (
	<ThemeProvider theme={ThemeDefault}>
		<GlobalStyle />
		{storyFn()}
	</ThemeProvider>
);

addDecorator(GlobalDecorator);
