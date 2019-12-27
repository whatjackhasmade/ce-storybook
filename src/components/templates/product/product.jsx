import React, { useContext } from "react"
import Img from "gatsby-image/withIEPolyfill"

import ApplicationContext from "../../particles/context/applicationContext"
import Layout from "../../particles/layout"
import ParseHTML from "../../particles/parseHTML"

import Button from "../../atoms/button/button"
import Link from "../../atoms/link/link"

import StyledProduct from "./product.styles"

const ProductWrapper = props => (
  <Layout {...props}>
    <ProductTemplate {...props} />
  </Layout>
)

const ProductTemplate = props => {
  const { pageContext } = props
  const { description, image, productId, name } = pageContext
  const { dispatch, state } = useContext(ApplicationContext)

  const inCart = state.cart.find(product => product.name === name)
  const currentQuantity = !inCart ? 0 : inCart.quantity

  const updateCart = (e, action) => {
    e.preventDefault()
    dispatch({ key: null, type: action, value: { ...pageContext } })
  }

  return (
    <StyledProduct>
      <img alt="Product" src={image.mediaItemUrl} />
      <div>
        {productId}
        {/* <Img fluid={pageContext.imageFile.childImageSharp.fluid} /> */}
        <header>
          <Link href="/">Products</Link>
          <h1>{name}</h1>
          {!inCart && (
            <Button onClick={e => updateCart(e, "productIncrease")}>
              Add to Cart
            </Button>
          )}
          {inCart && (
            <nav>
              <Link href="/checkout">View cart</Link>
              <Button
                onClick={e => updateCart(e, "productDecrease")}
                variant="tertiary"
              >
                Decrease quantity
              </Button>
            </nav>
          )}
        </header>
        {ParseHTML(description)}
      </div>
    </StyledProduct>
  )
}

export default ProductWrapper
