const createPostsPages = require("./pagination/create-posts-pages")
const createTagsPages = require("./pagination/create-tags-pages")
const createCategoriesPages = require("./pagination/create-categories-pages")

const path = require("path")
const _ = require("lodash")


const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/404.tsx'),
  });

  // Posts from markdown
  const result = await graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { section: { eq: "posts" } } }
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
  createPosts(result.data.allMdx.edges, actions)

  //   Pages from markdown
  const result2 = await graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { section: { ne: "posts" } } }
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
  createPosts(result2.data.allMdx.edges, actions)


  await createPostsPages(graphql, actions)
  await createTagsPages(graphql, actions)
  await createCategoriesPages(graphql, actions)

  createPage({
    path: "/posts",
    component: path.resolve("./src/templates/posts.tsx"),
  })

}

function createPosts(edges, actions) {
  const { createPage } = actions
  _.each(edges, (edge, index) => {
    const layout = _.get(edge, "node.frontmatter.layout")
    let templ = './src/templates/post.tsx'
    if (layout) {
      templ = `./src/templates/${layout}.tsx`
    }

    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(templ),
      context: { 
        slug: edge.node.fields.slug,
        prev: index === 0 ? null : edges[index - 1].node,
        next: index === edges.length - 1 ? null : edges[index + 1].node
      }
    })
  })
    
}

module.exports = createPages;