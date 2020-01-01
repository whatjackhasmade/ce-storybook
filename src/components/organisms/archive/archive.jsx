import React from "react"
import { arrayOf, shape, string } from "prop-types"

import StyledArchive from "./archive.styles"

import ArchiveItem from "../../molecules/archive-item/archiveItem"

const Archive = ({ items }) => (
  <StyledArchive className="archive">
    <div className="archive__contents">
      {items.map(item => (
        <ArchiveItem key={item.id} {...item} />
      ))}
    </div>
  </StyledArchive>
)

Archive.propTypes = {
  items: arrayOf(
    shape({
      description: string,
      featuredImage: shape({
        mediaItemUrl: string.isRequired,
      }),
      id: string,
      image: shape({
        mediaItemUrl: string.isRequired,
      }),
      price: string,
      shortDescription: string,
      slug: string.isRequired,
      title: string.isRequired,
    })
  ).isRequired,
}

export default Archive
