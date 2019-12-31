import React from "react"
import { string } from "prop-types"
import { navigate } from "gatsby"

import StyledLogout from "./logout.styles"

import refetchQueriesByName from "../../particles/apollo/refetchQueriesByName"

import CURRENT_CART_QUERY from "../../particles/queries/cart/CURRENT_CART_QUERY"
import CUSTOMER_DETAILS_QUERY from "../../particles/queries/users/CUSTOMER_DETAILS_QUERY"
import USER_DETAILS_QUERY from "../../particles/queries/users/USER_DETAILS_QUERY"

import Button from "../../atoms/button/button"

const Logout = ({ title }) => {
  const authToken = localStorage.getItem("authToken")

  if (!authToken) return null

  const logoutUser = e => {
    e.preventDefault()
    refetchQueriesByName([
      "CURRENT_CART_QUERY",
      "CUSTOMER_DETAILS_QUERY",
      "USER_DETAILS_QUERY",
    ])
    localStorage.removeItem("authToken")
    localStorage.removeItem("refreshToken")
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
