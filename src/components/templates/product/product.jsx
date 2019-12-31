import React from "react"
import { useMutation } from "@apollo/react-hooks"
// import Img from "gatsby-image/withIEPolyfill"
import { generateID } from "../../helpers"

import StyledProduct from "./product.styles"

import Layout from "../../particles/layout"
import ParseHTML from "../../particles/parseHTML"

import ADD_TO_CART_MUTATION from "../../particles/mutations/cart/ADD_TO_CART_MUTATION"

import CURRENT_CART_QUERY from "../../particles/queries/cart/CURRENT_CART_QUERY"

import Button from "../../atoms/button/button"
import Link from "../../atoms/link/link"
import HR from "../../atoms/hr/hr"

import Banner from "../../organisms/banner/banner"
import Carousel from "../../organisms/carousel/carousel"

const ProductWrapper = props => (
  <Layout {...props}>
    <ProductTemplate {...props} />
  </Layout>
)

const ProductTemplate = props => {
  const [addToCart, { data, error, loading }] = useMutation(
    ADD_TO_CART_MUTATION
  )

  // Debugging changes 🕵🏻‍♂️
  console.log({ data })
  console.log({ error })
  console.log({ loading })

  const { pageContext } = props
  const {
    banner,
    carousel,
    collection,
    description,
    image,
    price,
    productCategories,
    productId,
    name,
  } = pageContext

  const inCart = false
  const updateCart = e => {
    e.preventDefault()

    const variables = {
      clientMutationId: generateID("add-to-cart"),
      productId,
      quantity: 1,
    }

    addToCart({
      refetchQueries: [{ query: CURRENT_CART_QUERY }],
      variables,
    })
  }

  console.log(productCategories.nodes.length)

  return (
    <StyledProduct>
      <HR full={true} mb="0px" mt="0px" />
      <section className="product__intro">
        {/* <Img fluid={pageContext.imageFile.childImageSharp.fluid} /> */}
        <header className="product__header">
          <div className="product__header__content">
            <nav>
              <Link href="/shop">Products</Link>
              {productCategories &&
                productCategories.nodes &&
                productCategories.nodes.length > 0 && (
                  <Link
                    href={`/product-category/${productCategories.nodes[0].slug}`}
                  >
                    {productCategories.nodes[0].title}
                  </Link>
                )}
            </nav>
            {name && <h1>{name}</h1>}
            {price && <h2 className="h4">{price}</h2>}
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
