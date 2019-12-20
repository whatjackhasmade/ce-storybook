import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Linto';
		src: url(${Fonts.LintoBrownLightEOT}); /* IE9 Compat Modes */
		src: url(${Fonts.LintoBrownLightEOTIE}) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.LintoBrownLightWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.LintoBrownLightWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.LintoBrownLightTTF})  format('truetype');
		font-style: normal;
		font-weight: 300;
	}

	@font-face {
		font-family: 'Linto';
		src: url(${Fonts.LintoBrownRegularEOT}); /* IE9 Compat Modes */
		src: url(${Fonts.LintoBrownRegularEOTIE}) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.LintoBrownRegularWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.LintoBrownRegularWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.LintoBrownRegularTTF})  format('truetype');
		font-style: normal;
		font-weight: normal;
	}

	@font-face {
		font-family: 'Linto';
		src: url(${Fonts.LintoBrownBoldEOT}); /* IE9 Compat Modes */
		src: url(${Fonts.LintoBrownBoldEOTIE}) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.LintoBrownBoldWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.LintoBrownBoldWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.LintoBrownBoldTTF})  format('truetype');
		font-style: normal;
		font-weight: bold;
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
`;

export default GlobalStyle;
