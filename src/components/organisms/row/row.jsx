import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"

import StyledRow from "./row.styles"

import ParseHTML from "../../particles/parseHTML"

import CTA from "../../atoms/cta/cta"

const Row = ({ cta, description, image, subtitle, title }) => (
  <StyledRow>
    <div className="row__contents">
      <div class="row__column">
        {subtitle && <h3 className="row__subtitle">{subtitle}</h3>}
        {title && <h2 className="row__title">{title}</h2>}
        {description && (
          <div className="row__description">{ParseHTML(description)}</div>
        )}
        {cta && cta.label && cta.url && (
          <CTA className="row__cta" href={cta.url}>
            {cta.label}
          </CTA>
        )}
      </div>
      <div class="row__column">
        {image && image.mediaItemUrl && (
          <div class="row__image">
            <img
              src={image.mediaItemUrl}
              alt={image.altText ? image.altText : title}
            />
          </div>
        )}
      </div>
    </div>
  </StyledRow>
)

export default Row
