import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${props => props.theme.primary};
		color: white;
	}
`;

export default GlobalStyle;
