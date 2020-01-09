/* eslint-disable react/no-danger */
import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo";

import BG1 from "../images/bg1.png"

const PostBoxWrapper = styled.section`
  .bg-one{
    background-image:url(${BG1}) !important;
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
  }
  margin-top:135px !important;
  .container{
    max-width:1040px !important;
  }
  .row-col .list .img img {
    -webkit-transition: all 0.5s cubic-bezier(0.5, 1, 0.5, 1) !important;
    transition: all 0.5s cubic-bezier(0.5, 1, 0.5, 1) !important;
  }
  .row-col .list{
    width:100%;
  }

`

const PostTemplate = ({ data: { allWordpressPost } }) => (
  <Layout>
    <SEO title="Blog" />
    <PostBoxWrapper className="blog-list">
      <div className="bg-one wowo fadeIn parallax-s"></div>
      <div className="bg-circle-purple wowo fadeIn parallax-s"></div>
      <div className="container">
        <h1>latest posts</h1>
        <div className="row-col wowo fadeInUp">
          {allWordpressPost.edges.map(post => (
            <div className="list">
              <Link to={`/${post.node.slug}/`}>
                {post.node.featured_media &&
                  post.node.featured_media.localFile.childImageSharp
                    .fluid && (
                    <div className="img">
                      <Img
                        fluid={
                          post.node.featured_media.localFile
                            .childImageSharp.fluid
                        }
                      />
                    </div>
                  )}
                <div className="text">
                  {post.node.acf.tag_or_cat_name_gatsby && (
                    <h4>
                      <span>{post.node.acf.tag_or_cat_name_gatsby}</span><span> , </span>
                    </h4>
                  )}
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: post.node.title,
                    }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PostBoxWrapper>
  </Layout>
)

export default PostTemplate

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
          slug
          acf {
            tag_or_cat_name_gatsby
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth:1920, maxHeight:1005) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          date(formatString: "DD, MMM, YYYY")
        }
      }
    }
  }
`
