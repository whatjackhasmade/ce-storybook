import styled from "styled-components"

export const StyledHR = styled.hr`
  margin-left: ${props =>
    props.full ? ` calc(-50vw + 50% + 30px)` : undefined};
  margin-right: ${props =>
    props.full ? ` calc(-50vw + 50% - 30px)` : undefined};

  margin-bottom: ${props => (props.mb ? props.mb : undefined)};
  margin-top: ${props => (props.mt ? props.mt : undefined)};

  width: ${props => (props.full ? `calc(100vw - 60px)` : `100%`)};
`

export default StyledHR
