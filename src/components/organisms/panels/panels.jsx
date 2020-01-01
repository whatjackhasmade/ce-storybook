import React from "react"
import PropTypes from "prop-types"

import StyledPanels from "./panels.styles"

import CTA from "../../atoms/cta/cta"

const { arrayOf, shape, string } = PropTypes

const Panels = ({ cta, items }) => {
  if (!items || !items.length) return null
  return (
    <StyledPanels className="panels">
      <div className="panels__contents">
        {items.map(({ content, link, title }) => (
          <div className="panels__panel" key={title}>
            {title && <h3>{title}</h3>}
            {content && <p>{content}</p>}
            {link && <CTA {...link}>{link.label}</CTA>}
          </div>
        ))}
      </div>
      {cta && (
        <footer className="panels__footer">
          <CTA {...cta}>{cta.label}</CTA>
        </footer>
      )}
    </StyledPanels>
  )
}

// Expected prop values
Panels.propTypes = {
  cta: shape({
    href: string,
    label: string,
    target: string,
  }),
  items: arrayOf(
    shape({
      content: string,
      link: shape({
        href: string,
        label: string,
        target: string,
      }),
      title: string.isRequired,
    })
  ),
}

Panels.defaultProps = {
  items: [],
}

export default Panels
