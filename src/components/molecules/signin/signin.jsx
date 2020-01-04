import React from "react"
import { string } from "prop-types"

import StyledSignIn from "./signin.styles"

import Button from "../../atoms/button/button"

const SignIn = ({ action }) => {
  const authToken = localStorage.getItem("authToken")
  if (authToken) return null

  return (
    <StyledSignIn className="signin">
      <p>You need to login to {action}</p>
      <nav>
        <Button href="/register">Register</Button>
        <Button href="/login" variant="secondary">
          Sign in
        </Button>
      </nav>
    </StyledSignIn>
  )
}

// Expected prop values
SignIn.propTypes = {
  action: string.isRequired,
}

SignIn.defaultProps = {
  action: "continue",
}

export default SignIn
