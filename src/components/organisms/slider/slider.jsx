import React from "react"
import PropTypes from "prop-types"

import StyledSlider from "./slider.styles"

import IconArrowRight from "../../../assets/images/icons/arrow-left.svg"

const { arrayOf, shape, string } = PropTypes

const Slider = ({ items, variant }) => {
  if (items.length > 5) items.slice(0, 5)

  const currentIndex = 0

  const onControlClick = (e, i) => {
    e.preventDefault()
    alert(i)
  }

  const onPaginationClick = (e, action) => {
    e.preventDefault()
    alert(action)
  }

  return (
    <StyledSlider className="slider">
      <SliderCurrent {...items[0]} />
      {items.length > 1 && (
        <footer className="slider__footer">
          <div className="slider__controls">
            <nav className="slider__arrows">
              <button
                className="slider__previous"
                onClick={e => onPaginationClick(e, "previous")}
              >
                <IconArrowRight />
              </button>
              <button
                className="slider__next"
                onClick={e => onPaginationClick(e, "next")}
              >
                <IconArrowRight />
              </button>
            </nav>
            <nav className="slider__pagination">
              {[...Array(items.length)].map((x, i) => (
                <button
                  className={currentIndex === i ? `active` : undefined}
                  key={i}
                  onClick={e => onControlClick(e, i)}
                />
              ))}
            </nav>
          </div>
          <nav className="slider__options">
            {items.map(item => (
              <SliderItem {...item} />
            ))}
          </nav>
        </footer>
      )}
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
