import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  padding: 30px;
  position: relative;

  color: ${props => props.theme.white};

  button {
    display: inline-flex;

    display: none;
  }

  img {
    left: 50%;
    height: 30px;
    position: absolute;
    top: 50%;

    transform: translate(-50%, -50%);
  }

  nav + nav {
    margin-left: auto;
  }
`

export default StyledHeader
