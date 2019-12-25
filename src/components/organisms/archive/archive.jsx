import React from "react"
import PropTypes from "prop-types"

import StyledArchive from "./archive.styles"

import ArchiveItem from "../../molecules/archive-item/archiveItem"

const { arrayOf, number, shape, string } = PropTypes

const Archive = ({ items }) => (
  <StyledArchive className="archive">
    <div className="archive__contents">
      {items.map(item => (
        <ArchiveItem {...item} />
      ))}
    </div>
  </StyledArchive>
)

Archive.propTypes = {
  items: arrayOf(
    shape({
      price: number.isRequired,
      slug: string.isRequired,
      title: string.isRequired,
    })
  ).isRequired,
}

export default Archive
