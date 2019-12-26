import React from "react"
import PropTypes from "prop-types"
import he from "he"
import Slider from "react-slick"
import { breakpoints } from "../../particles/mediaQueries"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import SyledCarousel from "./carousel.styles"

import Link from "../../atoms/link/link"

import Intro from "../../molecules/intro/intro"

const { array, node, object, string } = PropTypes

const settings = {
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: breakpoints.lg,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: breakpoints.md,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: breakpoints.xs,
      slidesToShow: 1,
    },
  ],
}

const Carousel = ({ intro, items }) => {
  if (!items) return null
  if (!items.length) return null

  if (items.length < 3 && items.length < 5) {
    items = [...items, ...items, ...items]
  } else {
    items = [...items, ...items]
  }

  return (
    <SyledCarousel className="carousel">
      <Intro {...intro} />
      <Slider className="carousel__slider" {...settings}>
        {items.map(item => (
          <CarouselItem {...item} />
        ))}
      </Slider>
    </SyledCarousel>
  )
}

const CarouselItem = ({ category, description, image, slug, title }) => (
  <div className="carousel__item">
    <Link href={`/${slug}`}>
      {image && slug && (
        <div className="carousel__item__image">
          <img src={image} alt={title} />
        </div>
      )}
      {category && category.label && (
        <h4 className="carousel__item__subtitle">{category.label}</h4>
      )}
      {title && <h3 className="carousel__item__title">{title}</h3>}
      {description && (
        <p className="carousel__item__description">{he.decode(description)}</p>
      )}
    </Link>
  </div>
)

// Expected prop values
Carousel.propTypes = {
  items: array.isRequired,
}

Carousel.defaultProps = {
  items: [],
}

export default Carousel
