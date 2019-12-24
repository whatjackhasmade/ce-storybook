import styled from "styled-components";
import { device } from "../../particles/mediaQueries";

export const StyledPanels = styled.section`
	margin-left: calc(-50vw + 50%);
	margin-right: calc(-50vw + 50%);
	padding: 64px 0;

	background-color: ${props => props.theme.offWhite};
	color: ${props => props.theme.black};
	text-align: center;

	@media ${device.md} {
		padding: 96px 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0 0 16px;

		font-size: 26px;
		line-height: 110%;

		@media ${device.md} {
			margin: 0 0 24px;

			font-size: 36px;
			letter-spacing: -0.05em;
		}
	}

	p {
		margin: 16px 0;

		color: ${props => props.theme.grey600};
		font-size: 18px;
		letter-spacing: -0.05em;
		line-height: 140%;
	}

	.panels__contents {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		padding: 0 30px;

		@media ${device.md} {
			align-items: center;
			flex-direction: row;
			padding: 0;
		}

		@media ${device.xl} {
			max-width: 80%;
		}
	}

	.panels__panel {
		flex: 1;
		position: relative;

		@media ${device.md} {
			padding: 0 40px;
		}

		+ .panels__panel {
			margin-top: 48px;
			padding-top: 48px;

			border-top: 1px solid ${props => props.theme.grey400};

			@media ${device.md} {
				margin-top: 0;
				padding-top: 0;

				border-top: none;

				&:before {
					content: "";
					display: block;
					height: 80px;
					left: 0;
					position: absolute;
					top: 50%;
					width: 1px;

					background-color: ${props => props.theme.grey200};
					transform: translateY(-50%);
				}
			}
		}
	}
`;

export default StyledPanels;
