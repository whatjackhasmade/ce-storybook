import React from "react"
import PropTypes from "prop-types"
import { formatMoney } from "../../helpers"

import StyledArchiveItem from "./archiveItem.styles"

import Link from "../../atoms/link/link"

import ParseParagraphs from "../../particles/parseParagraphs"
import CTA from "../../atoms/cta/cta"

const { number, shape, string } = PropTypes

const ArchiveItem = ({
  description,
  id,
  image,
  price,
  shortDescription,
  slug,
  title,
}) => (
  <StyledArchiveItem className="archive-item" key={id}>
    <Link href={`/${slug}`}>
      {image && image.mediaItemUrl && (
        <div className="archive-item__image">
          <img src={image.mediaItemUrl} alt={title} />
        </div>
      )}
      {title && <h2 className="h4">{title}</h2>}
      {price && <span className="archive-item__price">{price}</span>}
      {(description || shortDescription) && (
        <p className="archive-item__description">
          {shortDescription
            ? ParseParagraphs(shortDescription)
            : ParseParagraphs(description)}
        </p>
      )}
      <footer className="archive-item__footer">
        <CTA>View Product</CTA>
      </footer>
    </Link>
  </StyledArchiveItem>
)

ArchiveItem.propTypes = {
  description: string,
  id: string,
  image: shape({
    mediaItemUrl: string.isRequired,
  }),
  price: string.isRequired,
  shortDescription: string,
  slug: string.isRequired,
  title: string.isRequired,
}

export default ArchiveItem
