import React, { useState } from "react"
import { string, bool } from "prop-types"
import he from "he"

import StyledError from "./errorMessage.styles"

import CTA from "../../atoms/cta/cta"

const cleanText = string =>
  he
    .decode(string)
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace("ERROR: ", "")

const ErrorMessage = ({ isDeveloperConcern = false, message, title }) => {
  const [isReported, setReported] = useState(false)

  if (!message) return null
  if (isReported) return null

  const reportError = e => {
    e.preventDefault()
    // TODO: Hook up error reporting with Sentry
    alert("Reported error")
    setReported(true)
  }

  return (
    <StyledError className="error">
      <p>
        {title ? (
          title
        ) : (
          <>
            <strong>
              <span aria-label="Upset emoji face" role="img">
                😔
              </span>{" "}
              Something went wrong
            </strong>
            :
          </>
        )}
        {message && (
          <span className="error__mesage"> {cleanText(message)}</span>
        )}
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
  isDeveloperConcern: bool.isRequired,
  message: string.isRequired,
  title: string,
}

ErrorMessage.defaultProps = {
  isDeveloperConcern: false,
}

export default ErrorMessage
