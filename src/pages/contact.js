import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from '../components/layout';
import SEO from "../components/seo";


const ContactPageWrapper = styled.section`
    margin-top:135px;
`

const ContactSection = () => {
    const data = useStaticQuery(graphql`
	query {
        wordpressPage(slug: {eq: "contact"}) {
			id
			title
            content
            acf {
                contact_page_left_image{
                    localFile {
                        childImageSharp {
                            resolutions(width:383, height:473) {
                                src
                                width
                                height
                            }
                        }
                    }
                }
                contact_page_details
            }
		}
	}
  
  `)
  const resolutions = data.wordpressPage.acf.contact_page_left_image
  ?  data.wordpressPage.acf.contact_page_left_image.localFile.childImageSharp.resolutions
  : null
    return (
        <Layout>
            <SEO title={data.wordpressPage.title}/>
            <ContactPageWrapper className="contact-us-content">
                <div className="bg-circle-dark-blue wowo fadeIn parallax-s"></div>
                    <div className="container">
                        <div className="left">
                            <h1 className="wowo fadeInUp">{data.wordpressPage.title}</h1>
                            <div className="img wowo fadeInLeft">
                                <img src={resolutions.src} alt="Left Banner" />
                                <div className="bg-circle-purple"></div>
                            </div>
                        </div>

                        <div className="right wowo fadeInUp">
                            <div dangerouslySetInnerHTML={{__html:data.wordpressPage.acf.contact_page_details}}/>
                        </div>
                    </div>
            </ContactPageWrapper>
        </Layout>
    )
}

export default ContactSection
