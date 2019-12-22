import React from "react"
import { arrayOf, shape, string } from "prop-types"

import StyledNavigation from "./navigation.styles"

import IconPlus from "../../../assets/images/icons/plus.svg"
import IconBag from "../../../assets/images/icons/shopping-bag.svg"
import IconCart from "../../../assets/images/icons/shopping-cart.svg"
import IconUser from "../../../assets/images/icons/user.svg"
import IconX from "../../../assets/images/icons/x.svg"

import Link from "../../atoms/link/link"

// Assign SVGs to object with named keys
const Icons = {
  bag: IconBag,
  cart: IconCart,
  plus: IconPlus,
  times: IconX,
  user: IconUser,
}

const Navigation = ({ items }) => {
  if (!items) return null
  if (!items.length) return null

  return (
    <StyledNavigation className="navigation">
      {items.map(item => {
        const { icon, label, target, url } = item
        const relativeUrl = url.replace(/^(?:\/\/|[^\/]+)*\//, "")
        return (
          <Link
            className={icon ? `link--icon` : null}
            href={relativeUrl}
            target={target}
            title={icon ? label : undefined}
          >
            <span>{icon ? <NavIcon {...item} /> : label}</span>
          </Link>
        )
      })}
    </StyledNavigation>
  )
}

// Expected prop values
Navigation.propTypes = {
  items: arrayOf(
    shape({
      icon: string,
      label: string,
      target: string,
      url: string,
    })
  ).isRequired,
}

const NavIcon = ({ icon, label }) => {
  // If icon name value doesn't match Icons object keys then return null
  if (Icons[icon] === undefined) return null
  // If icon found, return the icon with a visibly hiddent text label
  const Icon = Icons[icon]
  return (
    <>
      <Icon />
      <span className="hidden">{label}</span>
    </>
  )
}

// Navigation Icon component always expects a prop value for icon
NavIcon.propTypes = {
  icon: string.isRequired,
  label: string,
}

export default Navigation
