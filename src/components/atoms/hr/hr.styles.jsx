import styled from "styled-components"

export const StyledHR = styled.hr`
  margin-bottom: ${props => (props.mb ? props.mb : undefined)};
  margin-top: ${props => (props.mt ? props.mt : undefined)};

  margin-left: ${props => (props.full ? ` calc(-50vw + 50%)` : undefined)};
  margin-right: ${props => (props.full ? ` calc(-50vw + 50%)` : undefined)};
  width: ${props => (props.full ? `100vw` : `100%`)};
`

export default StyledHR
