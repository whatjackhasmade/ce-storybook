import React from "react"
import Img from "gatsby-image/withIEPolyfill"

import StyledProduct from "./product.styles"

import Layout from "../../particles/layout"
import ParseHTML from "../../particles/parseHTML"

import Button from "../../atoms/button/button"
import Link from "../../atoms/link/link"

import Banner from "../../organisms/banner/banner"
import Carousel from "../../organisms/carousel/carousel"

const ProductWrapper = props => (
  <Layout {...props}>
    <ProductTemplate {...props} />
  </Layout>
)

const ProductTemplate = props => {
  const { pageContext } = props
  const { banner, carousel, description, image, productId, name } = pageContext

  const inCart = false
  const updateCart = e => e.preventDefault()

  return (
    <StyledProduct>
      <section className="product__intro">
        {/* <Img fluid={pageContext.imageFile.childImageSharp.fluid} /> */}
        <header className="product__header">
          <div className="product__header__content">
            <nav>
              <Link href="/">Products</Link>
              <Link href="/">Collection name</Link>
            </nav>
            {name && <h1>{name}</h1>}
            <div className="product__description">
              {description && ParseHTML(description)}
            </div>
            {!inCart && <Button onClick={updateCart}>Add to Cart</Button>}
            {inCart && (
              <>
                <Link href="/checkout">View cart</Link>
                <Button onClick={updateCart} variant="tertiary">
                  Decrease quantity
                </Button>
              </>
            )}
          </div>
        </header>
        <div className="product__image">
          {image && image.mediaItemUrl && (
            <img alt="Product" src={image.mediaItemUrl} />
          )}
        </div>
      </section>
      {banner && <Banner {...banner} />}
      {carousel && <Carousel {...carousel} />}
    </StyledProduct>
  )
}

export default ProductWrapper
