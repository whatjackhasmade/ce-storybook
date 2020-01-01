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

const banner = {
  content: "Creating a Positive Day",
  cta: {
    href: "#",
    label: "Call to action",
    target: null,
  },
  title: "Creating a Positive Day",
}

const related = {
  intro: {
    cta: {
      href: "/shop",
      label: "Shop all products",
      target: null,
    },
    subtitle: "Our products",
    text:
      "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
    title: "Premium, Handcrafted Care",
  },
  items: [
    {
      category: {
        href: "/product-category/sets",
        label: "Sets",
      },
      image: "https://source.unsplash.com/random/500x300",
      slug: "perfect-day",
      title: "Perfect Day",
    },
    {
      category: {
        href: "/product-category/sets",
        label: "Sets",
      },
      image: "https://source.unsplash.com/random/500x300",
      slug: "perfect-day",
      title: "Perfect Day",
    },
    {
      category: {
        href: "/product-category/sets",
        label: "Sets",
      },
      image: "https://source.unsplash.com/random/500x300",
      slug: "perfect-day",
      title: "Perfect Day",
    },
  ],
}

const ProductWrapper = props => (
  <Layout {...props}>
    <ProductTemplate {...props} />
  </Layout>
)

const ProductTemplate = props => {
  const [addToCart] = useMutation(ADD_TO_CART_MUTATION)

  const authToken = localStorage.getItem("authToken")

  const { pageContext } = props
  const {
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
      {banner && <Banner {...banner} />}
      {related && <Related {...related} variant="products" />}
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
