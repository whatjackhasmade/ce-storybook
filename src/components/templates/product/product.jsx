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

import SignIn from "../../molecules/signin/signin"

import Banner from "../../organisms/banner/banner"
import Related from "../../organisms/related/related"
import SliceGrid from "../../organisms/slice-grid/slice-grid"

const relatedIntro = {
  cta: {
    href: "/shop",
    label: "Shop all products",
    target: null,
  },
  subtitle: "Our products",
  text:
    "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
  title: "Premium, Handcrafted Care",
}

const ProductWrapper = props => (
  <Layout {...props}>
    <ProductTemplate {...props} />
  </Layout>
)

const ProductTemplate = props => {
  const { gatsbyContext, pageContext } = props
  const { productFields, related } = pageContext
  const { globalFields } = gatsbyContext
  const { enabledComponents } = productFields

  return (
    <StyledProduct>
      <HR full={true} mb="0px" mt="0px" />
      <ProductIntro {...pageContext} />
      {enabledComponents && (
        <ProductContent
          enabledComponents={enabledComponents}
          productFields={productFields}
          global={globalFields}
        />
      )}
      {related && (
        <Related
          intro={relatedIntro}
          items={related.nodes}
          variant="products"
        />
      )}
    </StyledProduct>
  )
}

const ProductContent = ({ enabledComponents, productFields, globalFields }) => {
  const enabledFields = Object.keys(productFields)
    .filter(k => enabledComponents.includes(k))
    .reduce((obj, key) => {
      obj[key] = productFields[key]
      return obj
    }, {})

  if (!enabledFields) return null

  const slices = Object.keys(enabledFields)
    .filter(k => k.startsWith("slice_"))
    .map(item => enabledFields[item])

  const { cta } = enabledFields

  return (
    <>
      {slices &&
        slices.length > 0 &&
        slices.map(slice => (
          <SliceGrid
            {...slice}
            key={generateID("slice-grid")}
            images={slice.images.map(i => i.image)}
          />
        ))}
      {cta && cta.useGlobalCta && globalFields && globalFields.ctaBanner && (
        <Banner {...globalFields.ctaBanner} />
      )}
      {cta && !cta.useGlobalCta && cta.content && <Banner {...cta} />}
    </>
  )
}

const ProductIntro = ({
  description,
  image,
  price,
  productCategories,
  productId,
  name,
}) => {
  const [addToCart] = useMutation(ADD_TO_CART_MUTATION)
  const authToken = localStorage.getItem("authToken")
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
          {authToken ? (
            <ProductActions currentId={productId} updateCart={updateCart} />
          ) : (
            <SignIn action="purchase this product" />
          )}
        </div>
      </header>
      <div className="product__image">
        {image && image.mediaItemUrl && (
          <img alt="Product" src={image.mediaItemUrl} />
        )}
      </div>
    </section>
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
