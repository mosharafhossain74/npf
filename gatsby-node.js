const path = require('path')
const slash = require('slash')
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get data from Wordpress
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
            wordpress_id
            wordpress_parent
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            status
            link
            wordpress_id
            categories {
              id
            }
          }
        }
      }
    }
  `)

  // Check for errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  const {
    allWordpressPage,
    allWordpressPost,
  } = result.data

  // Define template for Page
  const pageTemplate = path.resolve('./src/templates/page.js')
  // Generate pages from wp pages
  allWordpressPage.edges.forEach(
    ({ node: { id, link, status, wordpress_id, wordpress_parent } }) => {
      if (status === 'publish') {
        createPage({
          path: link || '/',
          component: slash(pageTemplate),
          context: {
            id,
            parent: wordpress_parent,
            wpId: wordpress_id,
          },
        })
      }
    }
  )

  const blogTemplate = path.resolve('./src/templates/blog.js')
  allWordpressPost.edges.forEach(edge => {
    if (edge.node.status === "publish") {
      createPage({
        path:'/blog/',
        component: slash(blogTemplate),
        context: {
          id: edge.node.id,
        },
      })
    }
  })

}
