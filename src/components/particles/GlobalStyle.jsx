import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		color: black;
	  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		font-size: 62.5%;
		/* BETTER FONT SMOOTHING - https://gist.github.com/hsleonis/55712b0eafc9b25f1944 */
		font-variant-ligatures: none;
		-webkit-font-variant-ligatures: none;
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
	}

	button {
		font-weight: 700;
	}

	body {
		scroll-behavior: smooth;

		font-size: 1.6rem;
		line-height: 1.5;
	}
`;

export default GlobalStyle;
