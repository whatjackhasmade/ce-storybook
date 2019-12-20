import styled from "styled-components";

export const StyledFooter = styled.footer`
	display: flex;
	flex-wrap: wrap;
	padding: 48px 48px 64px;

	background-color: ${props => props.theme.grey800};
	color: ${props => props.theme.white};

	a {
		color: ${props => props.theme.white};
		text-decoration: none;
	}

	button {
		min-width: auto;
	}

	form {
		display: flex;
	}

	input[type="email"] {
		width: 100%;
	}

	svg {
		max-width: 24px;

		fill: ${props => props.theme.white};
	}

	.footer__social {
		margin: 16px auto;

		a + a {
			margin-left: 12px;
		}
	}

	.footer__copyright {
		align-items: center;
		display: flex;
		margin: 48px auto 0;
		width: 100%;

		* {
			margin: 0;
		}

		a {
			padding: 16px;
		}
	}

	.footer__navigation {
		a {
			font-weight: 400;
		}

		a + a {
			margin-left: 0;
			margin-top: 16px;
		}

		nav {
			flex-direction: column;
			padding: 0;
		}
	}

	.footer__navigation + .footer__navigation {
		margin-left: 64px;
	}

	.footer__newsletter {
		margin-left: auto;
		max-width: 320px;
	}

	.footer__wrapper {
		display: flex;
	}
`;

export default StyledFooter;
