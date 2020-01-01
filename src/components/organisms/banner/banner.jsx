import React from "react"
import { shape, string } from "prop-types"

import StyledBanner from "./banner.styles"

import ParseHTML from "../../particles/parseHTML"

import Button from "../../atoms/button/button"

const Banner = props => {
  const { content, cta, title } = props
  return (
    <StyledBanner {...props} className="banner">
      <div className="banner__contents">
        {title && <h2 className="banner__title">{title}</h2>}
        {content && <div className="banner__content">{ParseHTML(content)}</div>}
        {cta && (
          <footer className="banner__footer">
            <Button href={cta.href} target={cta.target} variant="tertiary">
              {cta.title}
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
    target: string,
    title: string.isRequired,
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
