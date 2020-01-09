import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import BG1 from "../../images/bg1.png"
import BG2 from "../../images/bg2.png"
import BG3 from "../../images/bg3.png"
import LBG4 from "../../images/large-bg4.png"
import BG4 from "../../images/bg4.png"

const Contentsection = styled.section`
     .bg-one{
        background-image:url(${BG1}) !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        background-size:cover !important;
     }
     .bg-two{
        background-image:url(${BG2}) !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        background-size:cover !important;
     }
    .bg-three{
        background-image:url(${BG3}) !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        background-size:cover !important;
    }
    .large-bg-four{
        background-image:url(${LBG4}) !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        background-size:cover !important;
    }
    .bg-four{
        background-image:url(${BG4}) !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        background-size:cover !important;
    }

`

const ContentSection = () => {
    const {
        content: { acf: content },
    } = useStaticQuery(graphql`
    query {
        content: wordpressPage(wordpress_id: { eq: 7}) {
        acf {
            top_title
            middle_title
            bottom_content
            bottom_button_title
            bottom_button_file{
                source_url
            }
            middle_right_image {
                localFile {
                childImageSharp {
                    resolutions(width: 605, height: 1205) {
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

    const resolutions = content.middle_right_image
        ? content.middle_right_image.localFile.childImageSharp.resolutions
        : null
    return (
        <Contentsection className="content-box bg-simple-blue next-module-box">
            <div className="bg-one wowo fadeIn parallax-s"></div>
            <div className="bg-two wowo fadeIn parallax-s"></div>
            <div className="bg-three wowo fadeIn parallax-s"></div>
            <div className="large-bg-four wowo fadeIn parallax-s"></div>
            <div className="bg-four wowo fadeIn parallax-s"></div>
            <div className="bg-circle-dark-blue wowo fadeIn parallax-s"></div>
            <div className="container">
                <div className="title-text wowo fadeInUp">
                    <div dangerouslySetInnerHTML={{ __html: content.top_title }} />
                    <div className="bg-circle-purple"></div>
                </div>
                <div className="text-img">
                    <div className="text wowo fadeInUp">
                        <h3>{content.middle_title}</h3>
                    </div>
                    <div className="img-box wowo fadeInRight">
                        <div className="img">
                            <img src={resolutions.src} alt="Middle Right" />
                            <div className="bg-circle-blue"></div>
                        </div>
                    </div>
                </div>
                <div className="content-text wowo fadeInUp">
                <div dangerouslySetInnerHTML={{ __html: content.bottom_content }} />
                    <p>
                    <Link
                    to={content.bottom_button_file.source_url}
                    className="text-btn"
                    target="_blank"
                    >
                    {content.bottom_button_title}
                    </Link></p>
                </div>
            </div>
        </Contentsection>
    )
}

export default ContentSection
