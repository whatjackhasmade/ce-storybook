import React from "react"
import { array, object, shape, string } from "prop-types"
import { generateID } from "../../helpers"

import StyledRelated from "./related.styles"

import ParseParagraphs from "../../particles/parseParagraphs"

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
            <RelatedItem
              {...item}
              key={generateID("related-item")}
              variant={variant}
            />
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

const RelatedItem = ({
  category,
  description,
  image,
  productCategories,
  shortDescription,
  slug,
  title,
  variant,
}) => (
  <div className="related-item">
    {image && slug && (
      <Link href={`/${slug}`}>
        <div className="related-item__image">
          <img
            src={image.mediaItemUrl}
            alt={image.altText ? image.altText : title}
          />
        </div>
      </Link>
    )}
    {productCategories &&
      productCategories.nodes &&
      productCategories.nodes.length > 0 && (
        <h4 className="related-item__subtitle">
          <Link href={`/product-category/${productCategories.nodes[0].slug}`}>
            {productCategories.nodes[0].title}
          </Link>
        </h4>
      )}
    {category && category.href && category.label && (
      <h4 className="related-item__subtitle">
        <Link href={category.href}>{category.label}</Link>
      </h4>
    )}
    <h3 className="related-item__title">
      <Link href={`/${slug}`}>{title}</Link>
    </h3>
    {(shortDescription || description) && (
      <>
        <div className="related-item__description">
          {shortDescription
            ? ParseParagraphs(shortDescription)
            : ParseParagraphs(description)}
        </div>
        <Link href={`/${slug}`}>
          <CTA>
            {variant === "products" ? `View product` : `Continue reading`}
          </CTA>
        </Link>
      </>
    )}
  </div>
)

// Expected prop values
RelatedItem.propTypes = {
  category: object.isRequired,
  description: string,
  image: shape({
    altText: string,
    mediaItemUrl: string.isRequired,
  }),
  shortDescription: string,
  title: string.isRequired,
}

export default Related
