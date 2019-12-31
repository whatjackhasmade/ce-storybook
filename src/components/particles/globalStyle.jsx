import { createGlobalStyle } from "styled-components"
import "normalize.css/normalize.css"

import device from "./mediaQueries"
import Fonts from "./fonts"

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

		/* Accessibly remove animations: https://gist.githubusercontent.com/bellangerq/6cdfe6e3701b4048c72546960c7c9f66/raw/dc5036697d0da57eff8e0f659106b319102e72a0/a11y-disable-animations.css */
	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.001ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.001ms !important;
		}
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

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.link--icon::after {
		display: none !important;
	}

	p {
		a {
			color: ${props => props.theme.primary};

			&:active,
			&:focus,
			&:hover {
				text-decoration: underline;
			}
		}
	}

	button {
		font-weight: 700;
	}

	body {
		overflow-y: scroll;

		background-color: ${props => props.theme.white};
		font-size: 1.6rem;
		line-height: 1.5;
		scroll-behavior: smooth;
	}

	main {
		flex: 1;
		margin: 0 auto;
		width: 100%;

		> * {
			margin-left: auto;
			margin-right: auto;
			max-width: 1440px;
		}
	}

	#___gatsby {
		/* Fix anchor scroll positioning */
		[id]::before {
			display: block;
			content: '';
			margin-top: -4rem;
			height: 4rem;
		}
	}

	.wrapper {
		overflow: hidden;

		@supports (display: flex) {
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		}
	}

	.grid {
		margin: 0 auto;
		max-width: 1440px;
		padding: 0 30px;
	}

	/* Common base styles for the site */
	figure, img, svg, video {
		max-width: 100%;
	}

	figure {
		width: auto !important;
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

	b, strong {
		font-weight: 700;
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
		letter-spacing: -0.05em;
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

	hr {
		height: 0;
		margin: 32px 0;

		border-top: 1px solid ${props => props.theme.grey200};
	}

	main {
		ol,
		ul {
			margin: 24px 0;
		}
	}

	main article {
		ol,
		ul {
			margin: 32px 0;
		}

		li {
			font-size: 16px;
			font-weight: 400;
			line-height: 30px;

			+ li {
				margin-top: 24px;
			}
		}
	}

	ol {
		padding-left: 24px;

		counter-reset: list-counter;
		list-style: none;
	}

	ol {
		margin: 48px 0;

		li {
			position: relative;

			counter-increment: list-counter;
			font-size: 16px;
			line-height: 30px;

			+ li {
				margin-top: 12px;
			}

			&::before {
				position: absolute;
				top: 0;
				left: 0;

				color: ${props => props.theme.primary};
				content: counter(list-counter) ". ";
				font-style: normal;
				font-weight: bold;

				transform: translateX(-110%);
				transform: translateX(calc(-100% - 12px));
			}
		}
	}

	/* FORM */
	button[type="submit"] {
		margin-top: 24px;
	}

	input[disabled] {
		cursor: not-allowed;
	}

  input,
  label,
  textarea {
    display: block;
    width: 100%;
	}

  input,
  textarea {
    padding: 16px;

		background-color: ${props => props.theme.white};
		border: 1px solid rgba(0, 0, 0, 0.12);

    & + & {
      margin-top: 24px;
    }
  }

  label {
    margin: 16px 0 8px;

		color: ${props => props.theme.black};
		font-size: 16px;
		font-weight: bold;
		line-height: 32px;
    text-transform: capitalize;
	}

	textarea {
		min-height: 150px;
		resize: vertical;
		width: 100%;
	}

	select {
		border-radius: 0;
		display: block;
    margin: 0;
    max-width: 100%;
		padding: 16px;
    width: 100%;

		 -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
		background-color: ${props => props.theme.white};
		border: 1px solid #ccc;
    box-shadow: none;
		color: ${props => props.theme.grey700};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 292.4 164.4'%3E%3Cpath d='M287 5.4c-3.4-3.5-8.1-5.5-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4C2 8.7 0 13.4 0 18.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 31c3.5-3.5 5.4-7.8 5.4-12.8s-1.9-9.2-5.5-12.8h.1z' fill='%23787878'/%3E%3C/svg%3E"),
      linear-gradient(to bottom, #fff 0%,#fff 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 1.1em top 50%, 0 0;
    background-size: .75em auto, 100%;
	}

	select::-ms-expand {
		display: none;
	}

	select:focus {
		outline: none;
	}

	option {
		padding: 16px;

		font-weight:normal;
	}

	::placeholder {
		color: #282220;
		font-size: 14px;
		font-weight: 300;
		line-height: 20px;
	}

	/* https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html */
	.hide:not(:focus):not(:active),
	.hidden:not(:focus):not(:active) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
		}
	}
`

export default GlobalStyle
