import React from "react"
import { array, shape, string } from "prop-types"
import Slider from "react-slick"
import { generateID } from "../../helpers"
import { breakpoints } from "../../particles/mediaQueries"

import "../../../assets/lib/slick/slick.css"
import "../../../assets/lib/slick/slick-theme.css"

import SyledCarousel, { SyledCarouselItem } from "./carousel.styles"

import ParseParagraphs from "../../particles/parseParagraphs"

import Link from "../../atoms/link/link"

import Intro from "../../molecules/intro/intro"

const settings = {
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
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

const Carousel = ({ intro, items, type }) => {
  if (!items) return null
  if (!items.length) return null

  if (items.length < 3 && items.length < 5) {
    items = [...items, ...items, ...items]
  } else {
    items = [...items, ...items]
  }

  return (
    <SyledCarousel className="carousel" type={type}>
      {intro && <Intro {...intro} />}
      <Slider className="carousel__slider" {...settings}>
        {items.map((item, index) => (
          <CarouselItem
            key={generateID("carousel-item")}
            {...item}
            index={index}
            type={type}
          />
        ))}
      </Slider>
    </SyledCarousel>
  )
}

const CarouselItem = ({
  category,
  description,
  image,
  index,
  productCategories,
  shortDescription,
  slug,
  title,
  type,
}) => (
  <SyledCarouselItem className="carousel__item" index={index} type={type}>
    {image && image.mediaItemUrl && slug && (
      <Link href={`/${slug}`}>
        <div className="carousel__item__image">
          <img src={image.mediaItemUrl} alt={title} />
        </div>
      </Link>
    )}
    {productCategories &&
      productCategories.nodes &&
      productCategories.nodes.length > 0 && (
        <Link href={`/product-category/${productCategories.nodes[0].slug}`}>
          <h4 className="carousel__item__subtitle">
            {productCategories.nodes[0].title}
          </h4>
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
    {(description || shortDescription) && (
      <div className="carousel__item__description">
        {shortDescription
          ? ParseParagraphs(shortDescription)
          : ParseParagraphs(description)}
      </div>
    )}
  </SyledCarouselItem>
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
  type: string.isRequired,
}

Carousel.defaultProps = {
  items: [],
  type: "standard",
}

export default Carousel
