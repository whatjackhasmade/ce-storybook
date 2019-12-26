import React from "react"
import PropTypes from "prop-types"

import StyledSlider from "./slider.styles"

const { arrayOf, shape, string } = PropTypes

const Slider = ({ items, variant }) => {
  if (items.length > 5) items.slice(0, 5)

  const onControlClick = (e, i) => {
    e.preventDefault()
    alert(i)
  }

  return (
    <StyledSlider className="slider">
      <SliderCurrent {...items[0]} />
      <footer className="slider__footer">
        <nav className="slider__controls">
          {[...Array(items.length)].map((x, i) => (
            <button key={i} onClick={e => onControlClick(e, i)} />
          ))}
        </nav>
        <nav className="slider__options">
          {items.map(item => (
            <SliderItem {...item} />
          ))}
        </nav>
      </footer>
    </StyledSlider>
  )
}

Slider.propTypes = {
  items: arrayOf(
    shape({
      image: string.isRequired,
    })
  ).isRequired,
}

const SliderCurrent = ({ image }) => (
  <div className="slider__current">
    <div className="slider__current__content">
      <p>Current</p>
    </div>
    <img src={image} />
  </div>
)

const SliderItem = ({ image }) => (
  <button className="slider__option">
    <img src={image} />
  </button>
)

export default Slider
