import React from "react"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../../particles/layout"

import Link from "../../atoms/link/link"

import StyledProduct from "./product.styles"

const ProductTemplate = props => {
  const { pageContext } = props
  const { name } = pageContext

  return (
    <Layout {...props}>
      <StyledProduct>
        <img src={pageContext.image.mediaItemUrl} />
        {/* <Img fluid={pageContext.imageFile.childImageSharp.fluid} /> */}
        <header>
          <Link href="/">Products</Link>
          <h1>{name}</h1>
        </header>
      </StyledProduct>
    </Layout>
  )
}

export default ProductTemplate
