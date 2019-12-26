import styled from "styled-components"

const LinkStyles = `
	align-items: center;
	display: inline-flex;
	justify-content: center;
	position: relative;

	color: inherit;
	font-size: 16px;
	outline-offset: 8px;
	text-decoration: none;
	text-transform: capitalize;

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

		svg {
			transform: translateX(4px);
		}
	}

	svg {
		display: block;
		height: 8px;
		margin-left: 8px;

		transform: translateX(0px);
		transition: 0.2s transform ease;
	}
`

export const StyledCTA = styled.a`
	${LinkStyles}
	outline-color: ${props => props.theme.black};

	svg {
		stroke: currentColor;
	}
`

export const StyledCTASpan = styled(StyledCTA).attrs({ as: "span" })`
  text-decoration: none;

  &[aria-current="page"],
  &:active,
  &:focus,
  &:hover {
    &:after {
      display: none;
    }
  }
`

export const StyledCTAWrapper = styled.span`
	a {
		${LinkStyles}
		outline-color: ${props => props.theme.black};

		svg {
			stroke: currentColor;
		}
	}
`

export default StyledCTA
