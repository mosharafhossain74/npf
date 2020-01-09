import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

const FooterWrapper = styled.footer`

`

const Footer = () => {
    const {
        acf,
      } = useStaticQuery(graphql`
        query {
          acf: allWordpressAcfOptions {
            edges {
              node {
                options {
                    footer_content
                }
              }
            }
          }
        }
      `)

  return (
    <FooterWrapper>
  <section className="video-light-box">
	<div className="box">
		<button className="close" title="Close"></button>
		<div className="play-iframe-video"></div>
	</div>
</section>
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: acf.edges[0].node.options.footer_content }} />
        </div>
    </FooterWrapper>
  )
}
export default Footer
