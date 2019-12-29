import styled from "styled-components"
import buttonReset from "../../atoms/button/button.reset"

export const StyledError = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 12px 16px;

  background-color: ${props => props.theme.white};
  border-left: 4px solid ${props => props.theme.primary};

  button {
    ${buttonReset}
  }

  p {
    margin: 0;
  }

  .cta {
    margin-top: 16px;
  }

  & + label {
    margin-top: 48px;
  }
`

export default StyledError
