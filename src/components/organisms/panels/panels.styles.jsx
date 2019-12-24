import styled from "styled-components";

export const StyledPanels = styled.section`
	margin-left: calc(-50vw + 50%);
	margin-right: calc(-50vw + 50%);
	padding: 96px 0;

	background-color: ${props => props.theme.offWhite};
	color: ${props => props.theme.black};
	text-align: center;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;

		font-size: 36px;
		letter-spacing: -0.05em;
		line-height: 110%;
	}

	p {
		margin: 16px 0;

		color: ${props => props.theme.grey600};
		font-size: 18px;
		letter-spacing: -0.05em;
		line-height: 140%;
	}

	svg {
		display: block;
		height: 8px;
		margin-left: 8px;

		stroke: ${props => props.theme.black};
	}

	.panels__contents {
		display: flex;
	}

	.panels__panel {
		padding: 0 40px;

		a:last-of-type {
			align-items: center;
			display: inline-flex;
			justify-content: center;
			position: relative;

			color: inherit;
			font-size: 14px;
			line-height: 140%;
			outline-color: ${props => props.theme.black};
			outline-offset: 8px;
			text-decoration: none;

			&:after {
				bottom: -4px;
				content: "";
				display: block;
				height: 2px;
				left: 0;
				position: absolute;
				width: 100%;

				background-color: currentColor;
				transform: scaleX(0);
				transform-origin: right center;
				transition: 0.4s transform ease;
			}

			&[aria-current="page"],
			&:active,
			&:focus,
			&:hover {
				&:after {
					transform: scaleX(1);
					transform-origin: left center;
				}
			}
		}

		+ .panels__panel {
			border-left: 1px solid ${props => props.theme.grey400};
		}
	}
`;

export default StyledPanels;
