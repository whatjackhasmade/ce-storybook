import styled from "styled-components";
import { hexToRGB, shadeColour } from "../../helpers.js";

export const StyledCart = styled.div`
	display: flex;

	background-color: ${props => `rgba(${hexToRGB(props.theme.grey800)}, 0.8)`};

	.cart__aside {
		background-color: ${props => props.theme.white};
		color: ${props => props.theme.grey800};
	}
`;

export const StyledCartToggle = styled.nav`
	bottom: 32px;
	position: fixed;
	right: 32px;

	button {
		align-items: center;
		border-radius: 48px;
		display: flex;
		height: 48px;
		justify-content: center;
		width: 48px;

		background-color: ${props => props.theme.primary};

		&:active,
		&:focus,
		&:hover {
			background-color: ${props => shadeColour(props.theme.primary, 30)};
		}
	}

	svg {
		display: block;
		max-width: 32px;
		width: 100%;

		stroke: ${props => props.theme.white};
		transform: translateX(-2px);
	}
`;

export default StyledCart;
