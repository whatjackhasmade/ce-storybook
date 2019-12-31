import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { isInternal } from "../../helpers"

import StyledCTA, { StyledCTASpan, StyledCTAWrapper } from "./cta.styles"

import IconArrowRight from "../../../assets/images/icons/arrow-right.svg"

const CTA = props => {
  const { children, className, href } = props
  const ctaClass = className ? "cta " + className : "cta"

  if (!href)
    return (
      <StyledCTASpan {...props} className={ctaClass}>
        {children} <IconArrowRight />
      </StyledCTASpan>
    )

  if (!isInternal(href)) {
    return (
      <StyledCTA className={ctaClass} {...props}>
        {children} <IconArrowRight />
      </StyledCTA>
    )
  }

  return (
    <StyledCTAWrapper className="cta-wrapper">
      <Link {...props} className={ctaClass} to={href}>
        {children} <IconArrowRight />
      </Link>
    </StyledCTAWrapper>
  )
}

// Expected prop values
CTA.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
}

// Default prop values
CTA.defaultProps = {
  children: "CTA text",
}

export default CTA
