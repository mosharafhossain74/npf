import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import cuid from "cuid"

import playicon from "../../images/iconplay.png";
import BG5 from "../../images/bg5.png"

const LatestVideoWrapper = styled.section`

    @media only screen and (max-width:540px) {

        .gatsby-image-wrapper,img.video-poster{
            height:216px !important;
            width:auto !important;
            margin-left:auto;
            margin-right:auto;   
        }
    }
    .bg-five{
        background-image:url(${BG5}) !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        background-size:cover !important;
    }
`
const VideoPoster = styled.div`

`

const VideoBox = ({ video_iframe_link, video_title, video_poster }) => (

    <div class="videos-list">
        <a href="/" class="video-link embed">
            <div class="data-video">
                <iframe 
                title="LatestVideos" 
                width="560" 
                height="315" 
                src={video_iframe_link} 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>    
                </iframe>
                {video_title && (
                    <h4>{video_title}?></h4>
                )}
            </div>
            <div class="video-bg">
                <VideoPoster>
                    <Image className="video-poster" fluid={video_poster.localFile.childImageSharp.fluid} />
                </VideoPoster>
                <img
                    className="icon-play"
                    src={playicon}
                    alt={playicon}
                />
            </div>
        </a>
    </div>

)

const LatestVideo = () => {
    const data = useStaticQuery(graphql`
    fragment videoimage on wordpress__wp_media {
        localFile {
          childImageSharp {
            fluid(maxHeight:205) {
                ...GatsbyImageSharpFluid
              }
          }
        }
      }
    query {
      wordpressPage(wordpress_id: { eq: 7 }) {
        acf {
            latest_video_section_title
            latest_videos {
                video_iframe_link
                video_title
                video_poster {
                    ...videoimage
                }
            }
        }
      }
    }
  `)

    return (

        <LatestVideoWrapper className="latest-videos">
            <div className="bg-five wowo fadeIn parallax-s"></div>
            <div className="container wowo fadeInUp">
                <h2>{data.wordpressPage.acf.latest_video_section_title}</h2>
                <div className="videos-content">
                    {data.wordpressPage.acf.latest_videos &&
                        data.wordpressPage.acf.latest_videos.map(item => (
                            <VideoBox {...item} key={cuid()} />
                        ))}
                </div>
            </div>
        </LatestVideoWrapper>

    )
}

export default LatestVideo
