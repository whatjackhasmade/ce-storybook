import styled from "styled-components";

export const StyledNavigation = styled.nav`
	display: flex;
	padding: 6px 10px;

	a + a {
		margin-left: 8px;
	}
`;

export default StyledNavigation;
