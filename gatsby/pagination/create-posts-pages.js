"use strict"

const path = require("path")
const siteConfig = require("../../site-config")

module.exports = async (graphql, actions) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx(
        filter: {
          fields: { section: { eq: "posts" } }
          frontmatter: { draft: { ne: true } }
        }
      ) {
        totalCount
      }
    }
  `)

  const { postsPerPage } = siteConfig
  const numPages = Math.ceil(result.data.allMdx.totalCount / postsPerPage)

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? "/" : `/page/${i + 1}`,
      component: path.resolve("./src/templates/index.tsx"),
      context: {
        currentPage: i + 1,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? "/" : `/page/${i}`,
        nextPagePath: `/page/${i + 2}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1,
        totalPages: numPages,
      },
    })
  }
}
