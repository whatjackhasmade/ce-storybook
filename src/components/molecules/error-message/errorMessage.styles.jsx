import styled from "styled-components"

export const StyledError = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 6px 16px;

  background-color: ${props => props.theme.white};
  border-left: 4px solid ${props => props.theme.primary};
`

export default StyledError
