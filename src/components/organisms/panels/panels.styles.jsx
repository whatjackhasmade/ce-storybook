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
		margin: 0 0 24px;

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

	.panels__contents {
		display: flex;
	}

	.panels__panel {
		padding: 0 40px;

		+ .panels__panel {
			border-left: 1px solid ${props => props.theme.grey400};
		}
	}
`;

export default StyledPanels;
