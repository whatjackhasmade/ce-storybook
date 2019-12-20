import React from "react"

const ProductTemplate = ({ pageContext }) => {
  const { name } = pageContext

  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

export default ProductTemplate
