import React from "react"
import { node, func, string } from "prop-types"
import { isInternal } from "../../helpers"

import StyledButton, {
  StyledLinkButton,
  StyledLinkWrapper,
} from "./button.styles"

import IconPlus from "../../../assets/images/icons/plus.svg"
import IconBag from "../../../assets/images/icons/shopping-bag.svg"
import IconCart from "../../../assets/images/icons/shopping-cart.svg"
import IconUser from "../../../assets/images/icons/user.svg"
import IconX from "../../../assets/images/icons/x.svg"

import Link from "../link/link"

// Assign SVGs to object with named keys
const Icons = {
  bag: IconBag,
  cart: IconCart,
  plus: IconPlus,
  times: IconX,
  user: IconUser,
}

const Button = props => {
  const { children, icon, onClick } = props
  let { href } = props
  href = href === "#" ? "/" : href

  if (!href)
    return (
      <StyledButton {...props} className="button" onClick={onClick}>
        {icon && <ButtonIcon icon={icon} />}
        {children}
      </StyledButton>
    )

  if (!isInternal(href)) {
    return (
      <StyledLinkButton {...props} className="button">
        {icon && <ButtonIcon icon={icon} />}
        {children}
      </StyledLinkButton>
    )
  }

  href = href.startsWith("/") ? href : "/" + href
  return (
    <StyledLinkWrapper {...props}>
      <Link {...props} className="button" href={href}>
        {icon && <ButtonIcon icon={icon} />}
        {children}
      </Link>
    </StyledLinkWrapper>
  )
}

// Expected prop values
Button.propTypes = {
  background: string,
  children: node.isRequired,
  href: string,
  icon: string,
  onClick: func,
  variant: string,
}

// Default prop values
Button.defaultProps = {
  children: "Button text",
  variant: "primary",
}

const ButtonIcon = ({ icon }) => {
  // If icon name value doesn't match Icons object keys then return null
  if (Icons[icon] === undefined) return null
  // If icon found, return the icon in a span element
  const Icon = Icons[icon]
  return (
    <span className="button__icon">
      <Icon />
    </span>
  )
}

// Button Icon component always expects on prop value for icon name
ButtonIcon.propTypes = {
  icon: string.isRequired,
}

export default Button
