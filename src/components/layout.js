import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header-second"
import FOOTER from "./Footer"
import JSHELPER from "./jquery-helper"

import "./layout.css"
import "bootstrap/dist/css/bootstrap-grid.css"
import SEO from "./seo";


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap');
  body{
    font-family:montserrat, sans-serif;
    padding:0;
    margin:0;
  }

`

const Primary = styled.main``

const Layout = ({ children }) => {
  return (
    <div>
      <SEO title="" description="" />
      <JSHELPER/>
      <GlobalStyles />
      <Header>
      </Header>
      <Primary id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          {children}
        </main>
      </Primary>
      <FOOTER />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
