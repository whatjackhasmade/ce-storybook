import React from "react"
import { useInView } from "react-intersection-observer"
import { bool, shape, string, arrayOf } from "prop-types"
import { generateID } from "../../helpers"

import StyledSliceGrid from "./slice-grid.styles"

import ParseHTML from "../../particles/parseHTML"

const SliceGrid = ({ images, reverse, text }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    rootMargin: "96px",
    threshold: 0.75,
    triggerOnce: true,
  })

  if (!images) return null

  return (
    <StyledSliceGrid
      className={inView ? `slice-grid slice-grid--inview` : `slice-grid`}
      imageCount={images && images.length ? images.length : 0}
      ref={ref}
      reverse={reverse}
    >
      <div className="slice-grid__contents">
        <div className="slice-grid__column">
          {images && images.length > 1 && (
            <div className="slice-grid__images">
              {images.map(({ altText, mediaItemUrl }) => (
                <div
                  className="slice-grid__image"
                  key={generateID("slice-grid__image")}
                >
                  <img alt={altText ? altText : undefined} src={mediaItemUrl} />
                </div>
              ))}
            </div>
          )}
          {images && images.length === 1 && (
            <div className="slice-grid__image">
              <img
                alt={images[0].altText ? images[0].altText : undefined}
                src={images[0].mediaItemUrl}
              />
            </div>
          )}
        </div>
        <div className="slice-grid__column">
          <div className="slice-grid__text">{text && ParseHTML(text)}</div>
        </div>
      </div>
    </StyledSliceGrid>
  )
}

SliceGrid.propTypes = {
  images: arrayOf({
    image: shape({
      altText: string,
      mediaItemUrl: string.isRequired,
    }),
  }),
  reverse: bool,
  text: string,
}

export default SliceGrid
