module.exports = {
  siteMetadata: {
    title: `Australian Healthcare Marketing Agency Driving New Patients on Demand`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    keywords: `Healthcare Marketing Agency`,
    siteUrl: "http://localhost:8000/",
    url: "https://www.gatsbyjs.org/",
    author: `James Ferguson`,
    domain: `newpatientflow.com.au/`,

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,    {
      resolve: "gatsby-source-wordpress",
      options: {
        excludedRoutes: [
          "/wp/v2/users/**",
          "/wp/v2/settings*",
          "wp/v2/themes*",
        ],
        baseUrl: "staging-npf.newpatientflow.com.au/",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: ["white_logo","black_logo","header_right_button_title","header_right_button_link","footer_content","video_play_icon","message_icon","blog_detail_icon"],
        searchAndReplaceContentUrls: {
          sourceUrl: "https://staging-npf.newpatientflow.com.au/",
          replacementUrl: "",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-styled-components",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
