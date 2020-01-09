import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from '../components/layout';
import SEO from "../components/seo";

import BG5 from "../images/bg5.png"

const StrategyPageWrapper = styled.section`
    margin-top:135px;
    .container {
        position: relative;
        max-width: 1026px !important;
    }
    .bg-five{
        background-image:url(${BG5}) !important;
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center center/
    }

`

const StrategySection = () => {
    const data = useStaticQuery(graphql`
	query {
        wordpressPage(slug: {eq: "free-strategy-session"}) {
			id
			title
            content
            acf {
                free_strategy_section_content
            }
		}
	}
  `)
    return (
        <Layout>
            <SEO title={data.wordpressPage.title} />
            <StrategyPageWrapper className="book_a_strategy_consult">
                <div className="bg-five wowo fadeIn parallax-s"></div>
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.acf.free_strategy_section_content }} />
                </div>
            </StrategyPageWrapper>
        </Layout>
    )
}

export default StrategySection
