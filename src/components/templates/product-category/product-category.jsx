import React from "react"

import StyledProductCategory from "./product-category.styles"

import Layout from "../../particles/layout"
import ParseHTML from "../../particles/parseHTML"

import HR from "../../atoms/hr/hr"

import Archive from "../../organisms/archive/archive"

const ProductCategoryWrapper = props => (
  <Layout {...props}>
    <ProductCategoryTemplate {...props} />
  </Layout>
)

const ProductCategoryTemplate = ({ pageContext }) => {
  const { description, image, products, title } = pageContext

  return (
    <StyledProductCategory>
      <HR full={true} mt="0px" />
      <h1 className="category__title">{title}</h1>
      {description && (
        <div className="category__description">{ParseHTML(description)}</div>
      )}
      <section className="category__products">
        <Archive items={products.nodes} />
      </section>
    </StyledProductCategory>
  )
}

export default ProductCategoryWrapper
