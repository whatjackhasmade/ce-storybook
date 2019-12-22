import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  padding: 30px;
  position: relative;

  color: ${props => props.theme.black};

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

  nav {
    padding: 0;
  }

  nav + nav {
    margin-left: auto;
  }

  svg {
    height: 24px;
    stroke: 1px solid ${props => props.theme.black};
  }
`

export default StyledHeader
