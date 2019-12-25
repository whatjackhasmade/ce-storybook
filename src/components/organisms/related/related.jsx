import React from "react"
import PropTypes from "prop-types"
import he from "he"

import StyledRelated from "./related.styles"

import CTA from "../../atoms/cta/cta"
import Link from "../../atoms/link/link"

const { array, node, object, string } = PropTypes

const Related = ({ cta, intro, items, subtitle, title }) => {
  if (!items) return null
  if (!items.length) return null

  return (
    <StyledRelated className="related">
      <div className="related__contents">
        <header className="related__header">
          {subtitle && <h3 className="related__subtitle">{subtitle}</h3>}
          {title && <h2 className="related__title">{title}</h2>}
          {intro && <p className="related__intro">{intro}</p>}
          {cta && (
            <Link href={cta.href} target={cta.target}>
              <CTA>{cta.label}</CTA>
            </Link>
          )}
        </header>
        <div className="related__items">
          {items.map(item => (
            <RelatedItem {...item} />
          ))}
        </div>
      </div>
    </StyledRelated>
  )
}

// Expected prop values
Related.propTypes = {
  items: array.isRequired,
}

Related.defaultProps = {
  items: [],
}

const RelatedItem = ({ category, description, image, slug, title }) => (
  <div className="related-item">
    {image && (
      <Link href={`/${slug}`}>
        <div className="related-item__image">
          <img src={image} alt={title} />
        </div>
      </Link>
    )}
    {category && (
      <h4 className="related-item__subtitle">
        <Link href={category.href}>{category.label}</Link>
      </h4>
    )}
    <h3 className="related-item__title">
      <Link href={`/${slug}`}>{title}</Link>
    </h3>
    {description && (
      <>
        <p className="related-item__description">{he.decode(description)}</p>
        <Link href={`/${slug}`}>
          <CTA>Continue reading</CTA>
        </Link>
      </>
    )}
  </div>
)

// Expected prop values
RelatedItem.propTypes = {
  category: object.isRequired,
  description: string,
  title: string.isRequired,
}

export default Related
