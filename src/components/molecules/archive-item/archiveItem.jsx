import React from "react"
import PropTypes from "prop-types"
import { formatMoney } from "../../helpers"

import StyledArchiveItem from "./archiveItem.styles"

import Link from "../../atoms/link/link"

import ParseParagraphs from "../../particles/parseParagraphs"
import CTA from "../../atoms/cta/cta"

const { number, string } = PropTypes

const ArchiveItem = ({ description, id, image, price, slug, title }) => (
  <StyledArchiveItem className="archive-item" key={id}>
    <Link href={`/${slug}`}>
      <div className="archive-item__image">
        <img src={image.mediaItemUrl} alt={title} />
      </div>
      <h2 className="h4">{title}</h2>
      <span className="archive-item__price">{formatMoney(price)}</span>
      {description && (
        <p className="archive-item__description">
          {ParseParagraphs(description)}
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
  image: string,
  price: number.isRequired,
  slug: string.isRequired,
  title: string.isRequired,
}

export default ArchiveItem
