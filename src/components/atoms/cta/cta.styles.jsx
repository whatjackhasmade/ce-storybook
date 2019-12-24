import styled from "styled-components";

const LinkStyles = `
	align-items: center;
	display: inline-flex;
	justify-content: center;
	position: relative;

	color: inherit;
	font-size: 14px;
	line-height: 140%;
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

	svg {
		display: block;
		height: 8px;
		margin-left: 8px;
	}
`;

export const StyledCTA = styled.a`
	${LinkStyles}
	outline-color: ${props => props.theme.black};

	svg {
		stroke: currentColor;
	}
`;

export const StyledCTAWrapper = styled.span`
	a {
		${LinkStyles}
		outline-color: ${props => props.theme.black};

		svg {
			stroke: currentColor;
		}
	}
`;

export default StyledCTA;
