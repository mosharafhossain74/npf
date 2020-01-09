import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import playicon from "../../images/iconplay.png";
import SecondLogo from "../../images/logo2.png";
import WrapperTopBg from "../../images/wrapper-home-top-bg.png";

const Herosection = styled.section`
::after{
  background-image:url(${WrapperTopBg}) !important;
  background-position:center center !important;
  background-repeat:no-repeat !important;
  background-size:cover !important;
}
.top-logo-bg::before{
  background-image:url(${SecondLogo}) !important;
  background-position:center center !important;
  background-repeat:no-repeat !important;
  background-size:cover !important;
}
`
const HeroSection = () => {
  const {
    hero: { acf: hero },
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
      hero: wordpressPage(wordpress_id: { eq: 7 }) {
        acf {
            hero_left_title
            iframe_link
            hero_video_bg {
            localFile {
              childImageSharp {
                resolutions(width:573, height:320) {
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
  `)

  const resolutions = hero.hero_video_bg
    ? hero.hero_video_bg.localFile.childImageSharp.resolutions
    : null
  return (

    <Herosection className="wrapper-home-top">
      <div className="top-logo-bg wowo fadeIn parallax-s"></div>
      <div className="container">

        <div className="left-text wowo fadeInUp">
          <h1 dangerouslySetInnerHTML={{ __html: hero.hero_left_title }} />
          <Link
            to={acf.edges[0].node.options.header_right_button_link}
            className="text-btn desktop-show"
            target="_blank"
          >
            {acf.edges[0].node.options.header_right_button_title}
          </Link>
        </div>

        <div className="video-box wowo fadeInUp">
          <a href="/" className="video-link embed">
            <div className="data-video">
              <iframe 
                title="Hero Video" 
                width="560" 
                height="315" 
                src={hero.iframe_link} 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="video-bg">
              <img src={resolutions.src} alt="vide-banner" />
              <img
                className="icon-play"
                src={playicon}
                alt={playicon}
              />
            </div>
          </a>
        </div>
        <Link
          to={acf.edges[0].node.options.header_right_button_link}
          className="text-btn mobile-show"
          target="_blank"
        >
          {acf.edges[0].node.options.header_right_button_title}
        </Link>
      </div>
    </Herosection>
  )
}

export default HeroSection
