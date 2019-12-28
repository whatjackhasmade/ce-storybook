import styled from "styled-components"
import { device } from "../../particles/mediaQueries"

export const StyledAccordion = styled.section`
  padding: 30px 0;
  width: 100%;

  .accordion__contents {
    display: ${props => (props.isOpen === true ? `block` : `none`)};
    margin: 0 auto;
    max-width: ${props => props.theme.gridMax};
  }
`

export default StyledAccordion
