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

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
	enqueue: () => {},
	hovering: () => {}
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
	action("NavigateTo:")(pathname);
};
