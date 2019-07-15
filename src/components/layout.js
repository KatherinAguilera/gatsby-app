import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/components"

import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        con ♥︎ por
        <a href="http://katherinaguilera.github.io">Katherine</a>
      </Footer>
    </Content>
  </>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout