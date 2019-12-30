import React from "react"
import PropTypes, { array, shape, string } from "prop-types"
import he from "he"
import Slider from "react-slick"
import { generateID } from "../../helpers"
import { breakpoints } from "../../particles/mediaQueries"

import "../../../assets/lib/slick/slick.css"
import "../../../assets/lib/slick/slick-theme.css"

import SyledCarousel from "./carousel.styles"

import Link from "../../atoms/link/link"

import Intro from "../../molecules/intro/intro"

const settings = {
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: breakpoints.xl,
      settings: {
        slidesToShow: 4,
      },
    },
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
      {intro && <Intro {...intro} />}
      <Slider className="carousel__slider" {...settings}>
        {items.map(item => (
          <CarouselItem key={generateID("carousel-item")} {...item} />
        ))}
      </Slider>
    </SyledCarousel>
  )
}

const CarouselItem = ({ category, description, image, slug, title }) => (
  <div className="carousel__item">
    {image && slug && (
      <Link href={`/${slug}`}>
        <div className="carousel__item__image">
          <img src={image} alt={title} />
        </div>
      </Link>
    )}
    {category && category.label && (
      <h4 className="carousel__item__subtitle">{category.label}</h4>
    )}
    {title && (
      <Link href={`/${slug}`}>
        <h3 className="carousel__item__title">{title}</h3>
      </Link>
    )}
    {description && (
      <p className="carousel__item__description">{he.decode(description)}</p>
    )}
  </div>
)

// Expected prop values
Carousel.propTypes = {
  intro: shape({
    cta: shape({
      href: string.isRequired,
      label: string.isRequired,
      target: string,
    }),
    subtitle: string.isRequired,
    text: string.isRequired,
    title: string.isRequired,
  }),
  items: array.isRequired,
}

Carousel.defaultProps = {
  items: [],
}

export default Carousel
