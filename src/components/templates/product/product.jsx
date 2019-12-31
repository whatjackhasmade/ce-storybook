import React, { useEffect, useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
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
    description,
    image,
    price,
    productCategories,
    productId,
    name,
  } = pageContext

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
            <ProductActions currentId={productId} updateCart={updateCart} />
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

const ProductActions = ({ currentId, updateCart }) => {
  const [inCart, setInCart] = useState(false)
  const { data, error, loading } = useQuery(CURRENT_CART_QUERY)

  useEffect(() => {
    const checkCart =
      data &&
      data.cart &&
      data.cart.contents &&
      data.cart.contents.nodes &&
      data.cart.contents.nodes.length > 0 &&
      data.cart.contents.nodes.some(p => p.product.productId === currentId)
    setInCart(checkCart)
  }, [currentId, data, error, loading])

  if (!inCart) return <Button onClick={updateCart}>Add to Cart</Button>
  return <Button href="/checkout">View cart</Button>
}

export default ProductWrapper
