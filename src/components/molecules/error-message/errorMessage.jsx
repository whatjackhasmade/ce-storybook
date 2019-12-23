import React from "react"
import { string } from "prop-types"

import StyledError from "./errorMessage.styles"

const ErrorMessage = ({ message }) => {
  if (!message) return null

  return (
    <StyledError className="error">
      {message && <span className="error__mesage">{message}</span>}
    </StyledError>
  )
}

// Expected prop values
ErrorMessage.propTypes = {
  message: string.isRequired,
}

export default ErrorMessage
