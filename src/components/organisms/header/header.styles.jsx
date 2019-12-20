import styled from "styled-components";

export const StyledHeader = styled.header`
	display: flex;

	background-color: ${props => props.theme.grey800};
	color: ${props => props.theme.white};

	button {
		display: inline-flex;

		display: none;
	}
`;

export default StyledHeader;
