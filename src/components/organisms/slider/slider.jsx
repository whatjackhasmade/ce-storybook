import React, { useRef, useState } from "react"
import { arrayOf, shape, string, bool } from "prop-types"
import SlickSlider from "react-slick"

import "../../../assets/lib/slick/slick.css"
import "../../../assets/lib/slick/slick-theme.css"

import StyledSlider, { StyledSliderItem } from "./slider.styles"

import IconArrowRight from "../../../assets/images/icons/arrow-left.svg"

import ParseHTML from "../../particles/parseHTML"

import Button from "../../atoms/button/button"

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
    <StyledSlider className="slider__wrapper">
      <div className="slider">
        {items.length > 1 ? (
          <SlickSlider
            className="slider__carousel"
            ref={slideRef}
            {...settings}
          >
            {items.map(item => (
              <SliderItem key={`slider-item-${item.title}`} {...item} />
            ))}
          </SlickSlider>
        ) : (
          <SliderItem {...items[0]} />
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
                <SliderOption
                  {...item}
                  index={index}
                  onControlClick={onControlClick}
                  slideIndex={slideIndex}
                />
              ))}
            </nav>
          </footer>
        )}
      </div>
    </StyledSlider>
  )
}

Slider.propTypes = {
  items: arrayOf(
    shape({
      cta: shape({
        label: string.isRequired,
        url: string.isRequired,
      }),
      description: string,
      image: shape({
        altText: string,
        mediaItemUrl: string.isRequired,
      }),
      light: bool.isRequired,
      title: string,
    })
  ).isRequired,
}

const SliderItem = ({ cta, description, image, light = false, title }) => (
  <StyledSliderItem className="slider__item" light={light}>
    <div className="slider__item__content">
      {title && <h2>{title}</h2>}
      {description && ParseHTML(description)}
      {cta && <Button href={cta.url}>{cta.label}</Button>}
    </div>
    <img alt={image.altText} src={image.mediaItemUrl} />
  </StyledSliderItem>
)

const SliderOption = ({ index, image, onControlClick, slideIndex }) => (
  <button
    className={
      index === slideIndex
        ? `slider__option slider__option--active`
        : `slider__option`
    }
    onClick={e => onControlClick(e, index)}
  >
    <img alt={image.altText} src={image.mediaItemUrl} />
  </button>
)

export default Slider
