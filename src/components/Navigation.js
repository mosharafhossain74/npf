import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"

export const Navigationwrapper = styled.nav`

`
const NavigationWrapper = ({ menu }) => {
    const {
        acf,
    } = useStaticQuery(graphql`
    query {
      acf: allWordpressAcfOptions {
        edges {
          node {
            options {
              header_right_button_title
              header_right_button_link
            }
          }
        }
      } 
    }
`)
    return (
        < Navigationwrapper >
            <div className="menu-c">
                <ul className="menu-list" id="menu-menu">
                    {menu.items.map((item, i) => (
                        <li className="menu-item" key={i}>
                            <Link
                                to={item.url}
                                activeClassName="active"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    to={acf.edges[0].node.options.header_right_button_link}
                    className="top-btn"
                    target="_blank"
                >
                    {acf.edges[0].node.options.header_right_button_title}
                </Link>
            </div>
        </Navigationwrapper >
    )
}

Navigationwrapper.propTypes = {
    menu: PropTypes.object,
}

export default NavigationWrapper
