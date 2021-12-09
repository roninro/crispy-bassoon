const path = require("path")
const _ = require("lodash")

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          fields: { section: { eq: "posts" } }
          frontmatter: { draft: { ne: true } }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach((edge, index) => {
    const layout = _.get(edge, "node.frontmatter.layout")
    let templ = "./src/templates/post.tsx"
    if (layout) {
      templ = `./src/templates/${layout}.tsx`
    }

    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(templ),
      context: {
        slug: edge.node.fields.slug,
        prev: index === 0 ? null : edges[index - 1].node,
        next: index === edges.length - 1 ? null : edges[index + 1].node,
      },
    })
  })

  // _.each(result.data.allMdx.edges, (edge, index) => {
  //   const layout = _.get(edge, "node.frontmatter.layout")
  //   let templ = "./src/templates/post.tsx"
  //   if (layout) {
  //     templ = `./src/templates/${layout}.tsx`
  //   }

  //   createPage({
  //     path: edge.node.fields.slug,
  //     component: path.resolve(templ),
  //     context: {
  //       slug: edge.node.fields.slug,
  //       prev: index === 0 ? null : edges[index - 1].node,
  //       next: index === edges.length - 1 ? null : edges[index + 1].node,
  //     },
  //   })
  // })
}
