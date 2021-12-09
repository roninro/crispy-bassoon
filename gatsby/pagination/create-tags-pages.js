"use strict"

const _ = require("lodash")
const path = require("path")
const siteConfig = require("../../site-config")

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = siteConfig

  const result = await graphql(`
    {
      allMdx(
        filter: {
          fields: { section: { eq: "posts" } }
          frontmatter: { draft: { ne: true } }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  _.each(result.data.allMdx.group, tag => {
    const numPages = Math.ceil(tag.totalCount / postsPerPage)
    const tagSlug = `/tags/${_.kebabCase(tag.fieldValue)}`

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? `${tagSlug}/` : `${tagSlug}/page/${i+1}`,
        component: path.resolve("./src/templates/tag.tsx"),
        context: {
          tag: tag.fieldValue,
          currentPage: i+1,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/page/${i}`,
          nextPagePath: `${tagSlug}/page/${i + 2}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
          totalPages: numPages,
        },
      })
    }
  })
}
