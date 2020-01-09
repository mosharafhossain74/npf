/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from "prop-types"
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from "../components/seo";

import BG1 from "../images/bg1.png"

const PageContent = styled.section`
    .bg-one{
        background-image:url(${BG1}) !important;
        background-size:cover !important;
        background-repeat:no-repeat !important;
        background-position:center center !important;
    }
`;

const PageTemplate = ({ data: { currentPage } }) => {
    return (
        <Layout>
            <SEO title={currentPage.title}/>
            <PageContent className="testimonials">
                <div className="bg-one wowo fadeIn parallax-s"></div>
                <div className="bg-circle-purple wowo fadeIn parallax-s"></div>
                <div className="container">
                    {currentPage.acf.page_title && (
                      <h1 className="wowo fadeInUp">{currentPage.acf.page_title}</h1>
                    )}
                    <div className="testimonials-list">
                        <div className="list wowo fadeInUp">
                            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
                        </div>
                    </div>
                </div>
            </PageContent>
        </Layout>
    )
}

PageTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}
export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!, $parent: Int!, $wpId: Int!) {
    currentPage: wordpressPage(id: { eq: $id }) {
      id
      title
      content
      wordpress_parent
      acf{
        page_title
      }
    }
    
    parentChildren: allWordpressPage(
      filter: { wordpress_parent: { eq: $parent } }
    ) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    children: allWordpressPage(filter: { wordpress_parent: { eq: $wpId } }) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    parent: wordpressPage(wordpress_id: { eq: $parent }) {
      title
      link
    }
  }
`;
