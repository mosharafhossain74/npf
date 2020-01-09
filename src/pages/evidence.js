import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import cuid from "cuid"
import Layout from '../components/layout';
import SEO from "../components/seo";

import MESSEGEICON from "../images/iconmessage.png"
import BG1 from "../images/bg1.png"

const TestimonialWrapper = styled.section`
    .bg-one{
        background-image:url(${BG1}) !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        background-size:cover !important;
    }
    @media only screen and (max-width:650px) {
        iframe {
            max-width: 560px !important;
            width: auto !important;;
            height: auto !important;;
        }
    }
`
const TestimonialBox = ({ testimonials_video_iframe_link, testimonial_title, testimonial_author, testimonial_author_meta }) => (
    <div className="list wowo fadeInUp">		
          <img
            src={MESSEGEICON}
            alt="Message icon"
        />
        <blockquote>
            <p>
                <iframe Title="Testimonial Video" src={testimonials_video_iframe_link} width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
            </p>
            <p>{testimonial_title}</p>
        </blockquote>
        <cite className="name">
            <p>{testimonial_author}</p>
            <p>{testimonial_author_meta}</p>
        </cite>
    </div>
)

const Testimonial = () => {
    const data = useStaticQuery(graphql`
	query {
        wordpressPage(slug: {eq: "evidence"}) {
			id
			title
            content
            acf {
                page_title
                testimonials{
                    testimonials_video_iframe_link
                    testimonial_title
                    testimonial_author
                    testimonial_author_meta
                }
            }
		}
	}
  
  `)
    return (
        <Layout>
            <SEO title={data.wordpressPage.title}/>
            <TestimonialWrapper className="testimonials">
                <div className="bg-one wowo fadeIn parallax-s"></div>
                <div className="bg-circle-purple wowo fadeIn parallax-s"></div>
                <div className="container">
                    <h1 className="wowo fadeInUp">{data.wordpressPage.acf.page_title}</h1>
                    <div className="testimonials-list">
                        {data.wordpressPage.acf.testimonials &&
                            data.wordpressPage.acf.testimonials.map(item => (
                                <TestimonialBox {...item} key={cuid()} />
                            ))}
                    </div>
                </div>
            </TestimonialWrapper>
        </Layout>
    )
}

export default Testimonial
