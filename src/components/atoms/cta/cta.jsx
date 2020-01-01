import React from "react"
import { node, string } from "prop-types"
import Link from "gatsby-link"
import { isInternal } from "../../helpers"

import StyledCTA, { StyledCTASpan, StyledCTAWrapper } from "./cta.styles"

import IconArrowRight from "../../../assets/images/icons/arrow-right.svg"

const CTA = (props, { children, className, href } = props) => {
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
  children: node.isRequired,
  href: string,
  target: string,
}

// Default prop values
CTA.defaultProps = {
  children: "CTA text",
}

export default CTA
