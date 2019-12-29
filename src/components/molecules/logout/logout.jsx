import React from "react"
import { string } from "prop-types"
import { navigate } from "gatsby"

import StyledLogout from "./logout.styles"

import Button from "../../atoms/button/button"

const Logout = ({ title }) => {
  const authToken = localStorage.getItem("authToken")

  if (!authToken) {
    console.log("Not currently logged in, skipping logout component")
    return null
  }

  const logoutUser = e => {
    e.preventDefault()
    localStorage.removeItem("authToken")
    navigate("/")
  }

  return (
    <StyledLogout className="navigation">
      {title && <h4>{title}:</h4>}
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
