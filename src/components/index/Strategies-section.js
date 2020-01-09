import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import CheckIcon from "../../images/iconchecked.png"
import BGWHITE from "../../images/bg-white.png"

const Strategiessection = styled.section`
    .bg-white{
        background-image:url(${BGWHITE}) !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        background-size:cover !important;
    }
    ul li::before{
        background-image:url(${CheckIcon}) !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        background-size:cover !important;
    }
`
const StrategiesSection = () => {
    const {
        strategy: { acf: strategy },
    } = useStaticQuery(graphql`
    query {
        strategy: wordpressPage(wordpress_id: { eq: 7 }) {
        acf {
            strtegies_section_title
            strategies_section_content
            strategies_button_title
            strategies_button_link
        }
      }
    }
  `)

    return (
        <Strategiessection className="strategies bg-dark-blue">
            <div className="bg-white wowo fadeIn parallax-s"></div>
            <div className="bg-four wowo fadeIn parallax-s"></div>
            <div className="bg-circle-purple wowo fadeIn parallax-s"></div>
            <div className="bg-circle-blue wowo fadeIn parallax-s"></div>
            <div className="bg-circle-white wowo fadeIn parallax-s"></div>
            <div className="container wowo fadeInUp">
                <h2>{strategy.strtegies_section_title}</h2>
                <div dangerouslySetInnerHTML={{ __html: strategy.strategies_section_content }} />
                <Link
                    to={strategy.strategies_button_link}
                    className="text-btn"
                >
                {strategy.strategies_button_title}
                </Link>
            </div>
        </Strategiessection>


    )
}

export default StrategiesSection
