import React, { useState } from "react"
import { arrayOf, shape, string } from "prop-types"

import StyledHeader from "./header.styles"

import BrandLogo from "../../../assets/images/brand/logo.png"

import Link from "../../atoms/link/link"

import Navigation from "../../molecules/navigation/navigation"

const Header = props => {
  const [isOpen, setOpen] = useState(false)
  const { navigation } = props

  const toggleNavigation = e => {
    e.preventDefault()
    setOpen(!isOpen)
  }

  return (
    <StyledHeader
      {...props}
      className={isOpen ? `header--open` : `header--closed`}
    >
      <div className="header__navigation">
        {navigation &&
          navigation.length &&
          navigation.map(({ items }, i) => (
            <Navigation key={`header-nav-${i}`} items={items} />
          ))}
      </div>
      <Link href="/">
        <img
          alt="Celtic Elements Logo"
          className="header__logo"
          src={BrandLogo}
        />
      </Link>
      <button onClick={toggleNavigation}>
        <span className="hide">Mobile</span>
        {isOpen ? `Hide` : `Show`} Navigation
      </button>
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
