import React from "react"
import PropTypes from "prop-types"

import StyledIntro from "./intro.styles"

import CTA from "../../atoms/cta/cta"
import Link from "../../atoms/link/link"

const { shape, string } = PropTypes

const Intro = ({ cta, subtitle, text, title }) => (
  <StyledIntro className="intro">
    <div className="intro__contents">
      {subtitle && <h3 className="intro__subtitle">{subtitle}</h3>}
      {title && <h2 className="intro__title">{title}</h2>}
      {text && <p className="intro__text">{text}</p>}
      {cta && (
        <Link className="intro__cta" href={cta.href} target={cta.target}>
          <CTA>{cta.label}</CTA>
        </Link>
      )}
    </div>
  </StyledIntro>
)

Intro.propTypes = {
  cta: shape({
    href: string.isRequired,
    label: string.isRequired,
    target: string,
  }),
  intro: string.isRequired,
  subtitle: string.isRequired,
  title: string.isRequired,
}

export default Intro
