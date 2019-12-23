import React from "react"
import { string } from "prop-types"

import StyledLogout from "./logout.styles"

import Button from "../../atoms/button/button"

const Logout = ({ title }) => {
  const logoutUser = e => {
    e.preventDefault()
    localStorage.removeItem("authToken")
  }

  return (
    <StyledLogout className="navigation">
      <h4>{title}:</h4>
      <Button onClick={logoutUser}>Logout</Button>
    </StyledLogout>
  )
}

// Expected prop values
Logout.propTypes = {
  title: string.isRequired,
}

Logout.defaultProps = {
  title: "Logout of account",
}

export default Logout
