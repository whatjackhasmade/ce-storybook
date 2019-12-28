import React from "react"
import styled from "styled-components"

const StyledDebugger = styled.pre`
  word-break: break-all;
`

const Debugger = ({ data }) => (
  <StyledDebugger>
    <code>{JSON.stringify(data, null, 4)}</code>
  </StyledDebugger>
)

export default Debugger
