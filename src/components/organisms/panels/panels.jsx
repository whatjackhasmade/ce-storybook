import React from "react"
import { arrayOf, shape, string } from "prop-types"

import StyledPanels from "./panels.styles"

import ParseHTML from "../../particles/parseHTML"

import CTA from "../../atoms/cta/cta"

const Panels = ({ cta, items }) => {
  if (!items || !items.length) return null
  return (
    <StyledPanels className="panels">
      <div className="panels__contents">
        {items.map(({ content, link, title }) => (
          <div className="panels__panel" key={title}>
            {title && <h3>{title}</h3>}
            {content && ParseHTML(content)}
            {link && link.title && link.title !== "" && (
              <CTA {...link} href={link.url}>
                {link.title}
              </CTA>
            )}
          </div>
        ))}
      </div>
      {cta && cta.title && cta.title !== "" && (
        <footer className="panels__footer">
          <CTA {...cta} href={cta.url}>
            {cta.title}
          </CTA>
        </footer>
      )}
    </StyledPanels>
  )
}

// Expected prop values
Panels.propTypes = {
  cta: shape({
    target: string,
    title: string,
    url: string,
  }),
  items: arrayOf(
    shape({
      content: string,
      link: shape({
        target: string,
        title: string,
        url: string,
      }),
      title: string.isRequired,
    })
  ),
}

Panels.defaultProps = {
  items: [],
}

export default Panels
