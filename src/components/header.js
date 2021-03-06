import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import Navigation from "./Navigation"

const HeaderWrapper = styled.header`

`

const Header = ({ children }) => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
    acf,
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      
      acf: allWordpressAcfOptions {
        edges {
          node {
            options {
              white_logo{
                localFile {
                  childImageSharp {
                    resolutions(width:952, height:98) {
                      src
                      width
                      height
                    }
                  }
                }
              }
              black_logo{
                localFile {
                  childImageSharp {
                    resolutions(width:952, height:98) {
                      src
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 2 } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
            }
            name
          }
        }
      }
    }
  `)
  const resolutions_white = acf.edges[0].node.options.white_logo
    ? acf.edges[0].node.options.white_logo.localFile.childImageSharp.resolutions
    : null

  const resolutions_black = acf.edges[0].node.options.black_logo
    ? acf.edges[0].node.options.black_logo.localFile.childImageSharp.resolutions
    : null

  return (
    <HeaderWrapper>
      <div className="header-absolute">
        <div className="container">
          <div className="header">
            <div className="logo">
              <Link to="/">
                {resolutions_white && (
                  <img className="white-logo" src={resolutions_white.src} alt="{site.siteMetadata.title}" />
                )}
                {resolutions_black && (
                  <img className="black-logo" src={resolutions_black.src} alt="{site.siteMetadata.title}" />
                )}

              </Link>
            </div>
            {children}
            <Navigation menu={menu} />         
            <a href="/" className="hamburger hamburger-button">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="header-fixed">
        <div className="container">
          <div className="header">
            <div className="logo">
              <Link to="/">
                {resolutions_white && (
                  <img className="white-logo" src={resolutions_white.src} alt="{site.siteMetadata.title}" />
                )}
                {resolutions_black && (
                  <img className="black-logo" src={resolutions_black.src} alt="{site.siteMetadata.title}" />
                )}

              </Link>
            </div>
            {children}
            <Navigation menu={menu} />

            <a href="/" className="hamburger hamburger-button">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </HeaderWrapper >
  )
}
export default Header

