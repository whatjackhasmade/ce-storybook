import styled from "styled-components"
import ButtonReset from "../../atoms/button/button.reset"

export const StyledLogout = styled.nav`
  display: inline-block;

  button {
    ${ButtonReset}
    min-width: auto;

    &:hover {
      background-color: transparent;
    }
  }
`

export default StyledLogout
