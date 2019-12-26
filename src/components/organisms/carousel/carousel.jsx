import React from "react"
import PropTypes from "prop-types"

import SyledCarousel from "./carousel.styles"

import Intro from "../../molecules/intro/intro"

const { array, node, object, string } = PropTypes

const Carousel = ({ intro, items }) => {
  if (!items) return null
  if (!items.length) return null

  return (
    <SyledCarousel className="caoursel">
      <div className="caoursel__contents">
        <Intro {...intro} />
      </div>
    </SyledCarousel>
  )
}

// Expected prop values
Carousel.propTypes = {
  items: array.isRequired,
}

Carousel.defaultProps = {
  items: [],
}

export default Carousel
