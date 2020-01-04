import React from "react"
import { useInView } from "react-intersection-observer"
import { bool, shape, string } from "prop-types"

import StyledRow from "./row.styles"

import ParseHTML from "../../particles/parseHTML"

import CTA from "../../atoms/cta/cta"

const Row = ({ cta, description, image, reverse, subtitle, title }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <StyledRow
      className={inView ? `row row--inview` : `row`}
      ref={ref}
      reverse={reverse}
    >
      <div className="row__contents">
        <div className="row__column">
          <div className="row__text">
            {subtitle && <h3 className="row__subtitle">{subtitle}</h3>}
            {title && <h2 className="row__title">{title}</h2>}
            {description && (
              <div className="row__description">{ParseHTML(description)}</div>
            )}
            {cta && cta.title && cta.title !== "" && (
              <CTA className="row__cta" href={cta.url}>
                {cta.title}
              </CTA>
            )}
          </div>
        </div>
        <div className="row__column">
          {image && image.mediaItemUrl && (
            <div className="row__image">
              <img
                alt={image.altText ? image.altText : title}
                src={image.mediaItemUrl}
              />
            </div>
          )}
        </div>
      </div>
    </StyledRow>
  )
}

Row.propTypes = {
  cta: shape({
    target: string,
    title: string,
    url: string,
  }),
  description: string,
  image: shape({
    altText: string,
    mediaItemUrl: string.isRequired,
  }),
  reverse: bool,
  subtitle: string,
  title: string,
}

export default Row
