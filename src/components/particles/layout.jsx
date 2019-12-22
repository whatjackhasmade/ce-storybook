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

const Layout = ({ cart, children, footer, header }) => (
  <ApolloWrapper>
    <ApplicationState>
      <ThemeProvider theme={ThemeDefault}>
        <GlobalStyle />
        <>
          {/* Start of visual page components */}
          {header && <Header />}
          {cart && <Cart />}
          {children}
          {footer && <Footer />}
          {/* End of visual page components */}
        </>
      </ThemeProvider>
    </ApplicationState>
  </ApolloWrapper>
)

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
