import styled from "styled-components";

export const StyledButton = styled.button`
	display: inline-flex;
	padding: 6px 10px;

	background-color: ${props => props.theme.primary};
	color: white;
`;

export default StyledButton;
