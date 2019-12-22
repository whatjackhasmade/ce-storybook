import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import ApolloWrapper from "./apollo/wrapper"
import ApplicationState from "./context/applicationState"
import GlobalStyle from "./globalStyle"
import ThemeDefault from "./themeDefault"

import Cart from "../organisms/cart/cart"
import Footer from "../organisms/footer/footer"
import Header from "../organisms/header/header"

const { bool, node } = PropTypes

const Layout = props => {
  const { cart, children, footer, header, pageContext } = props
  let menuHeader

  if (pageContext && pageContext.menuHeader) {
    menuHeader = pageContext.menuHeader.map(node => node.node)
    menuHeader = [
      { items: menuHeader },
      {
        title: "account",
        items: [
          {
            icon: null,
            label: "Insights",
            target: null,
            url: "#",
          },
          {
            icon: null,
            label: "Account",
            target: null,
            url: "#",
          },
          {
            icon: "user",
            label: "User",
            target: null,
            url: "#",
          },
          {
            icon: "bag",
            label: "Cart",
            target: null,
            url: "#",
          },
        ],
      },
    ]
  }

  return (
    <ApolloWrapper>
      <ApplicationState>
        <ThemeProvider theme={ThemeDefault}>
          <GlobalStyle />
          <>
            {/* Start of visual page components */}
            <div className="wrapper">
              {header && <Header navigation={menuHeader} />}
              {children && <main>{children}</main>}
              {footer && <Footer />}
            </div>
            {cart && <Cart />}
            {/* End of visual page components */}
          </>
        </ThemeProvider>
      </ApplicationState>
    </ApolloWrapper>
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
