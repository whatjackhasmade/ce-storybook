import React from "react"
import PropTypes from "prop-types"

import SEO from "../particles/seo"

import Cart from "../organisms/cart/cart"
import Footer from "../organisms/footer/footer"
import Header from "../organisms/header/header"

const { bool, node } = PropTypes

const Layout = props => {
  const {
    cart,
    children,
    footer,
    gatsbyContext,
    header,
    headerVariant,
    seo,
  } = props

  return (
    <React.Fragment>
      {seo && <SEO data={seo} />}
      {/* Start of visual page components */}
      <div className="wrapper">
        {header && (
          <Header
            navigation={gatsbyContext && gatsbyContext.headerMenu}
            variant={headerVariant}
          />
        )}
        {children && (
          <main>
            <div className="grid">{children}</div>
          </main>
        )}
        {footer && (
          <Footer navigation={gatsbyContext && gatsbyContext.footerMenus} />
        )}
      </div>
      {cart && <Cart />}
      {/* End of visual page components */}
    </React.Fragment>
  )
}

// Expected prop values
Layout.propTypes = {
  cart: bool.isRequired,
  children: node.isRequired,
  footer: bool.isRequired,
  header: bool.isRequired,
}

// By default include the header and footer unless specified false
Layout.defaultProps = {
  cart: true,
  footer: true,
  header: true,
}

export default Layout
