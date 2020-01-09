import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import cuid from "cuid"

import ARROWDOWN from "../../images/arrow.png"

const BenefitWrapper = styled.section`

    .next-module:before{
        background-image:url(${ARROWDOWN}) !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        background-size:cover !important;
    }
    .benefits-content .list:nth-child(1) .gatsby-image-wrapper,
    .benefits-content .list:nth-child(1) .img{
        width:88.95px !important;
    }

    .benefits-content .list:nth-child(2) .gatsby-image-wrapper,
    .benefits-content .list:nth-child(2) .img{
        width:73px !important;
    }

    .benefits-content .list:nth-child(3) .gatsby-image-wrapper,
    .benefits-content .list:nth-child(3) .img{
        width:61px !important;
    }

    .benefits-content .list:nth-child(4) .gatsby-image-wrapper,
    .benefits-content .list:nth-child(4) .img{
        width:85.93px !important;
    }

    @media only screen and (max-width:540px) {
        .benefits-content .list .gatsby-image-wrapper,
        .benefits-content .list .img{
            margin-left:auto;
            margin-right:auto;
        }
    
    }
`
const BENEFITICON = styled.div`

`
const BenefitBox = ({ benifit_title, benifit_sub_title, benifit_icon }) => (
    <div class="list">
        <BENEFITICON>
            <div className="img">
                <Image fluid={benifit_icon.localFile.childImageSharp.fluid} />
            </div>
        </BENEFITICON>
        <h3>{benifit_title}</h3>
        <p>{benifit_sub_title}</p>
    </div>
)

const Benefit = () => {
    const data = useStaticQuery(graphql`
    fragment image on wordpress__wp_media {
        localFile {
          childImageSharp {
            fluid(maxHeight:98) {
                ...GatsbyImageSharpFluid
              }
          }
        }
      }
    query {
      wordpressPage(wordpress_id: { eq: 7 }) {
        acf {
            benifit_section_title
            benifit_boxes {
                benifit_title
                benifit_sub_title
                benifit_icon {
                    ...image
                }
            }
        }
      }
    }
  `)

    return (
        <BenefitWrapper className="benefits">
            <div className="container wowo fadeInUp">
                <h2>{data.wordpressPage.acf.benifit_section_title}</h2>
                <div className="benefits-content">
                    {data.wordpressPage.acf.benifit_boxes &&
                        data.wordpressPage.acf.benifit_boxes.map(item => (
                            <BenefitBox {...item} key={cuid()} />
                        ))}
                </div>
            </div>
            <div className="next-module"></div>
        </BenefitWrapper>


    )
}

export default Benefit
