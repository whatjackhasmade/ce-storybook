import React from "react";
import { addDecorator } from "@storybook/react";
import { addParameters, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withOptions } from "@storybook/addon-options";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";

import ApolloWrapper from "../src/components/particles/apollo/wrapper";
import ApplicationState from "../src/components/particles/context/applicationState";
import GlobalStyle from "../src/components/particles/globalStyle";
import Layout from "../src/components/particles/layout";
import ThemeDefault from "../src/components/particles/themeDefault";

// Set Figma add-on to show panel in right side
withOptions({
	downPanelInRight: true
});

// Option defaults:
addParameters({
	options: {
		/**
		 * show story component as full screen
		 * @type {Boolean}
		 */
		isFullscreen: false,
		/**
		 * display panel that shows a list of stories
		 * @type {Boolean}
		 */
		showNav: true,
		/**
		 * display panel that shows addon configurations
		 * @type {Boolean}
		 */
		showPanel: true,
		/**
		 * where to show the addon panel
		 * @type {('bottom'|'right')}
		 */
		panelPosition: "right",
		/**
		 * regex for finding the hierarchy separator
		 * @example:
		 *   null - turn off hierarchy
		 *   /\// - split by `/`
		 *   /\./ - split by `.`
		 *   /\/|\./ - split by `/` or `.`
		 * @type {Regex}
		 */
		hierarchySeparator: /\/|\./,
		/**
		 * regex for finding the hierarchy root separator
		 * @example:
		 *   null - turn off multiple hierarchy roots
		 *   /\|/ - split by `|`
		 * @type {Regex}
		 */
		hierarchyRootSeparator: /\|/,
		/**
		 * sidebar tree animations
		 * @type {Boolean}
		 */
		sidebarAnimations: true,
		/**
		 * enable/disable shortcuts
		 * @type {Boolean}
		 */
		enableShortcuts: true,
		/**
		 * show/hide tool bar
		 * @type {Boolean}
		 */
		isToolshown: true,
		/**
		 * theme storybook, see link below
		 */
		theme: undefined,
		/**
		 * function to sort stories in the tree view
		 * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
		 * if left undefined, then the order in which the stories are imported will
		 * be the order they display
		 * @type {Function}
		 */
		storySort: (a, b) => a[1].id.localeCompare(b[1].id)
	}
});

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
			...INITIAL_VIEWPORTS
		}
	}
});
