import React, { useState } from "react"
import PropTypes from "prop-types"

import StyledHeader from "./header.styles"

import BrandLogo from "../../../assets/images/brand/logo.png"

import Link from "../../atoms/link/link"

import Navigation from "../../molecules/navigation/navigation"

const { arrayOf, shape, string } = PropTypes

const Header = props => {
  const { navigation } = props
  const [isOpen, setOpen] = useState(false)

  const toggleNavigation = e => {
    e.preventDefault()
    setOpen(!isOpen)
  }

  return (
    <StyledHeader
      {...props}
      className={isOpen ? `header--open` : `header--closed`}
    >
      <button onClick={toggleNavigation}>
        {isOpen ? `Hide` : `Show`} Navigation
      </button>
      {navigation &&
        navigation.length &&
        navigation.map(({ items }, i) => (
          <Navigation key={`header-nav-${i}`} items={items} />
        ))}
      <Link href="/">
        <img
          alt="Celtic Elements Logo"
          className="header__logo"
          src={BrandLogo}
        />
      </Link>
    </StyledHeader>
  )
}

// Expected prop values
Header.propTypes = {
  navigation: arrayOf(
    shape({
      items: arrayOf(
        shape({
          label: string,
          target: string,
          url: string,
        })
      ),
    })
  ),
}

export default Header
