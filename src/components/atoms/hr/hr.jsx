import React from "react"
import { bool, string } from "prop-types"

import StyledHR from "./hr.styles"

const HR = props => <StyledHR {...props} />

HR.propTypes = {
  full: bool.isRequired,
  mb: string,
  mt: string,
}

HR.defaultProps = {
  full: false,
}

export default HR
