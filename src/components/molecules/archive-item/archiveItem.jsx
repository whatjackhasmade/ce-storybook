import React from "react"
import PropTypes from "prop-types"

import StyledArchiveItem from "./archiveItem.styles"

import Link from "../../atoms/link/link"

const { number, string } = PropTypes

const ArchiveItem = ({ id, name, slug, title }) => (
  <StyledArchiveItem className="archive-item" key={id}>
    <Link href={`/${slug}`}>
      <h2 className="h4">{name}</h2>
    </Link>
  </StyledArchiveItem>
)

ArchiveItem.propTypes = {
  price: number.isRequired,
  slug: string.isRequired,
  title: string.isRequired,
}

export default ArchiveItem
