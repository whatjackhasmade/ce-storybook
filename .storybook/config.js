import React from "react";
import { addDecorator } from "@storybook/react";
import { configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { setOptions } from "@storybook/addon-options";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";

import ApolloWrapper from "../src/components/particles/apollo/wrapper";
import ApplicationState from "../src/components/particles/context/applicationState";
import GlobalStyle from "../src/components/particles/globalStyle";
import Layout from "../src/components/particles/layout";
import ThemeDefault from "../src/components/particles/themeDefault";

// automatically import all files ending in *.stories.js
configure(require.context("../src/components", true, /\.stories\.js$/), module);

const GlobalDecorator = storyFn => (
	<ApolloWrapper>
		<ApplicationState>
			<ThemeProvider theme={ThemeDefault}>
				<GlobalStyle />
				<Layout cart={false} footer={false} header={false}>
					{storyFn()}
				</Layout>
			</ThemeProvider>
		</ApplicationState>
	</ApolloWrapper>
);

addDecorator(GlobalDecorator);
addDecorator(withKnobs);

const newViewports = {
	kindleFire2: {
		name: "Kindle Fire 2",
		styles: {
			width: "600px",
			height: "963px"
		}
	},
	kindleFireHD: {
		name: "Kindle Fire HD",
		styles: {
			width: "533px",
			height: "801px"
		}
	}
};

// Set Figma add-on to show panel in right side
setOptions({
	downPanelInRight: true
});

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

addParameters({
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			...newViewports
		}
	}
});
