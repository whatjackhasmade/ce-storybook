import React, { useState } from "react"
import { string } from "prop-types"

import StyledError from "./errorMessage.styles"

import CTA from "../../atoms/cta/cta"

const ErrorMessage = ({ isDeveloperConcern = true, message }) => {
  const [isReported, setReported] = useState(false)

  if (!message) return null
  if (isReported) return null

  isDeveloperConcern = true

  const reportError = e => {
    e.preventDefault()
    // TODO: Hook up error reporting with Sentry
    alert("Reported error")
    setReported(true)
  }

  return (
    <StyledError className="error">
      <p>
        <strong>😔 Something went wrong</strong>:
        {message && <span className="error__mesage"> {message}</span>}
      </p>
      {isDeveloperConcern && (
        <CTA>
          <button onClick={reportError} type="button">
            Send to Development Team
          </button>
        </CTA>
      )}
    </StyledError>
  )
}

// Expected prop values
ErrorMessage.propTypes = {
  message: string.isRequired,
}

export default ErrorMessage
