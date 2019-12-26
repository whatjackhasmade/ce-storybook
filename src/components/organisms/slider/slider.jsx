import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import SlickSlider from "react-slick"
import { breakpoints } from "../../particles/mediaQueries"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import StyledSlider from "./slider.styles"

import IconArrowRight from "../../../assets/images/icons/arrow-left.svg"

const { arrayOf, shape, string } = PropTypes

const SliderArrow = ({ className, direction, style, onClick }) => (
  <button className={`slider__${direction}`} onClick={onClick}>
    <span className="hidden">{direction}</span>
    <IconArrowRight />
  </button>
)

const Slider = ({ items, variant }) => {
  const slideRef = useRef(null)
  const [slideIndex, setSlideIndex] = useState(0)

  if (items.length > 5) items.slice(0, 5)

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
  }
  const onControlClick = (e, i) => {
    e.preventDefault()
    slideRef.current.slickGoTo(i)
  }

  const onPaginationClick = (e, action) => {
    e.preventDefault()
    const value = action === "next" ? 1 : -1
    slideRef.current.slickGoTo(slideIndex + value)
  }

  return (
    <StyledSlider className="slider">
      {items.length > 1 ? (
        <SlickSlider className="slider__carousel" ref={slideRef} {...settings}>
          {items.map(item => (
            <SliderItem {...item} />
          ))}
        </SlickSlider>
      ) : (
        <SliderCurrent {...items[0]} />
      )}
      {items.length > 1 && (
        <footer className="slider__footer">
          <div className="slider__controls">
            <nav className="slider__arrows">
              <SliderArrow
                direction="previous"
                onClick={e => onPaginationClick(e, "previous")}
              />
              <SliderArrow
                direction="next"
                onClick={e => onPaginationClick(e, "next")}
              />
            </nav>
            <nav className="slider__pagination">
              {[...Array(items.length)].map((x, i) => (
                <button
                  className={slideIndex === i ? `active` : undefined}
                  key={i}
                  onClick={e => onControlClick(e, i)}
                />
              ))}
            </nav>
          </div>
          <nav className="slider__options">
            {items.map((item, index) => (
              <SliderOption {...item} index={index} slideIndex={slideIndex} />
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
  <div className="slider__item">
    <div className="slider__item__content">
      <p>Content</p>
    </div>
    <img src={image} />
  </div>
)

const SliderOption = ({ index, image, slideIndex }) => (
  <button
    className={
      index === slideIndex
        ? `slider__option slider__option--active`
        : `slider__option`
    }
  >
    <img src={image} />
  </button>
)

export default Slider
