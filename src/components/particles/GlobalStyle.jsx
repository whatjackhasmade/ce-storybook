import { createGlobalStyle } from "styled-components";
import "normalize.css/normalize.css";

import device from "./MediaQueries";
import Fonts from "./Fonts";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Linto';
		src: url(${Fonts.LintoBrownLightEOT}); /* IE9 Compat Modes */
		src: url(${
			Fonts.LintoBrownLightEOTIE
		}) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.LintoBrownLightWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.LintoBrownLightWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.LintoBrownLightTTF})  format('truetype');
		font-style: normal;
		font-weight: 300;
	}

	@font-face {
		font-family: 'Linto';
		src: url(${Fonts.LintoBrownRegularEOT}); /* IE9 Compat Modes */
		src: url(${
			Fonts.LintoBrownRegularEOTIE
		}) format('embedded-opentype'), /* IE6-IE8 */
			url(${
				Fonts.LintoBrownRegularWOFF2
			}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.LintoBrownRegularWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.LintoBrownRegularTTF})  format('truetype');
		font-style: normal;
		font-weight: normal;
	}

	@font-face {
		font-family: 'Linto';
		src: url(${Fonts.LintoBrownBoldEOT}); /* IE9 Compat Modes */
		src: url(${
			Fonts.LintoBrownBoldEOTIE
		}) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.LintoBrownBoldWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.LintoBrownBoldWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.LintoBrownBoldTTF})  format('truetype');
		font-style: normal;
		font-weight: bold;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	html {
		color: black;
	  font-family: "Linto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
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

		main {
		flex: 1;
		margin: 0 auto;
		max-width: 1506px;
		padding: 0 15px;
		width: 100%;

		@media ${device.xs} {
			padding: 0 30px;
		}

		/* Fix anchor scroll positioning */
		[id]::before {
			display: block;
			content: '';
			margin-top: -4rem;
			height: 4rem;
		}
	}

	.wrapper {
		@supports (display: flex) {
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		}
	}


	/* Common base styles for the site */
	img, svg, video {
		max-width: 100%;
	}

	video {
		display: block;
		width: 100%;
	}

	button,
	input[type="submit"] {
		padding: 16px;

		background-color: ${props => props.theme.primary};
		border: none;
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
		color: ${props => props.theme.white};
		cursor: pointer;
		font-weight: 700;
		line-height: 1;
		outline: none;
		text-decoration: none;
		transition: all 0.15s ease;
		white-space: nowrap;
	}


	h1, h2, h3, h4, h5, h6 {
		line-height: 1.25;
		margin: 16px 0;

		font-weight: 700;
		text-transform: capitalize;
	}

	h1,
	.h1 {
		margin-bottom: 24px;
		margin-top: 24px;

		font-size: 32px;
		font-weight: 700;
		line-height: 1.1;

		@media ${device.lg} {
			font-size: 40px;
		}
	}

	h2,
	.h2 {
		font-size: 30px;

		@media ${device.lg} {
			font-size: 32px;
		}
	}

	h3,
	.h3 {
		font-size: 24px;

		@media ${device.lg} {
			font-size: 30px;
		}
	}

	h4,
	.h4 {
		font-size: 20px;

		@media ${device.lg} {
			font-size: 24px;
		}
	}

	h5,
	.h5 {
		font-size: 18px;

		@media ${device.lg} {
			font-size: 20px;
		}
	}

	h6,
	.h6 {
		font-size: 16px;

		@media ${device.lg} {
			font-size: 18px;
		}
	}
`;

export default GlobalStyle;
