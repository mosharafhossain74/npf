import React from "react";
import Helmet from "react-helmet"

import MainLayout from "../components/layout";
import SEO from "../components/seo";
import HEROSECTION from "../components/index/Hero-section";
import BENEFITSECTION from "../components/index/Benefits-section"
import CONTENTSECTION from "../components/index/Content-section"
import LATESTVIDEOSSECTION from "../components/index/Latest-videos"
import STRATEGIESSECTION from "../components/index/Strategies-section"

const IndexPage = () => (
  <MainLayout>
    <Helmet
    bodyAttributes={{
      class: 'home'
    }}
    >

    </Helmet>
    <SEO title="Home" description="" />
    <HEROSECTION/>
    <BENEFITSECTION/>
    <CONTENTSECTION/>
    <LATESTVIDEOSSECTION/>
    <STRATEGIESSECTION/>
  </MainLayout>
)

export default IndexPage;
