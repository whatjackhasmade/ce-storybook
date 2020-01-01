import React from "react"
import { array, object, shape, string } from "prop-types"
import he from "he"

import StyledRelated from "./related.styles"

import CTA from "../../atoms/cta/cta"
import Link from "../../atoms/link/link"

import Intro from "../../molecules/intro/intro"

const Related = ({ intro, items, variant }) => {
  if (!items) return null
  if (!items.length) return null
  return (
    <StyledRelated className="related" variant={variant}>
      <div className="related__contents">
        <Intro {...intro} />
        <div className="related__items">
          {items.map(item => (
            <RelatedItem {...item} variant={variant} />
          ))}
        </div>
      </div>
    </StyledRelated>
  )
}

// Expected prop values
Related.propTypes = {
  intro: shape({
    cta: shape({
      href: string.isRequired,
      label: string.isRequired,
      target: string,
    }),
    subtitle: string.isRequired,
    text: string.isRequired,
    title: string.isRequired,
  }),
  items: array.isRequired,
  variant: string,
}

Related.defaultProps = {
  items: [],
  variant: "posts",
}

const RelatedItem = ({ category, description, image, slug, title }) => (
  <div className="related-item">
    {image && slug && (
      <Link href={`/${slug}`}>
        <div className="related-item__image">
          <img src={image} alt={title} />
        </div>
      </Link>
    )}
    {category && category.href && category.label && (
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
