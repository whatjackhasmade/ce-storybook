import React from "react"
import Layout from "../particles/layout"

const ProductTemplate = props => {
  const { pageContext } = props
  const { name } = pageContext

  return (
    <Layout {...props}>
      <h1>{name}</h1>
    </Layout>
  )
}

export default ProductTemplate
