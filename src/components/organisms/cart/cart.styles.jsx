import styled from "styled-components";
import { hexToRGB, shadeColour } from "../../helpers.js";

export const StyledCart = styled.div`
	display: flex;
	height: 100%;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;

	background-color: ${props => `rgba(${hexToRGB(props.theme.grey800)}, 0.8)`};

	h2 {
		margin: 0;

		font-size: 20px;
	}

	h3 {
		margin: 0;
		margin-bottom: 8px;

		font-size: 16px;
	}

	.cart__actions {
		display: flex;
		flex-direction: column;
		margin-top: auto;
		padding-top: 24px;
	}

	.cart__aside {
		display: flex;
		flex-direction: column;
		margin-left: auto;
		padding: 40px;

		background-color: ${props => props.theme.white};
		color: ${props => props.theme.grey800};
	}

	.cart__header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 32px;
		padding: 24px 0;

		border-bottom: 1px solid ${props => props.theme.grey100};
		border-top: 1px solid ${props => props.theme.grey100};
	}

	.cart__product {
		display: flex;

		button {
			height: 100%;
			padding: 8px;

			background-color: ${props => props.theme.grey500};

			svg {
				width: 16px;

				stroke: ${props => props.theme.white};
			}
		}
	}

	.cart__return {
		margin-top: 16px;
	}

	.product__meta {
		display: flex;
		flex-direction: column;
		margin: 0 24px 0 12px;
	}

	.product__quantity {
		display: inline-block;
		min-width: 40px;
		padding: 8px;
		text-align: center;

		font-size: 24px;
		font-weight: bold;
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
