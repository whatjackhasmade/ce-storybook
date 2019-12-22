import styled from "styled-components"

export const StyledProduct = styled.div`
  align-items: flex-start;
  display: flex;
  min-height: 500px;
  padding: 48px 0;
  width: 100%;

  border-top: 1px solid ${props => props.theme.grey200};

  h1 {
    margin-top: 0;
  }

  img {
    margin-right: 32px;
    max-width: 200px;
  }
`

export default StyledProduct
