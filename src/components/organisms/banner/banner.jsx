import React from "react"
import PropTypes from "prop-types"

import StyledBanner from "./banner.styles"

import ParseHTML from "../../particles/parseHTML"
import Button from "../../atoms/button/button"

const { shape, string } = PropTypes

const Banner = props => {
  const { content, cta, title } = props

  return (
    <StyledBanner {...props} className="banner">
      <div className="banner__contents">
        {title && <h2 className="banner__title">{title}</h2>}
        <p>{content}</p>
        {cta && (
          <footer className="banner__footer">
            <Button href={cta.href} target={cta.target} variant="tertiary">
              {cta.label}
            </Button>
          </footer>
        )}
      </div>
    </StyledBanner>
  )
}

Banner.propTypes = {
  cta: shape({
    href: string.isRequired,
    label: string.isRequired,
    target: string,
  }),
  content: string.isRequired,
  title: string,
  variant: string.isRequired,
}

Banner.defaultProps = {
  content: "",
  variant: "primary",
}

export default Banner
