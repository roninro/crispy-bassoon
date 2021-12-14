const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

// 每当创建新节点（或更新）时，Gatsby 都会调用 onCreateNode 函数
const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)

    createNodeField({
      node,
      name: "section",
      value: parent.sourceInstanceName || "",
    })

    const { slug } = node.frontmatter
    let _slug = slug
    if (!_slug) {
      let value = createFilePath({ node, getNode })
      if (parent.sourceInstanceName === "posts") {
        value = `/posts${value}`
      }
      createNodeField({
        node,
        name: "slug",
        value,
      })
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `/tags/${_.kebabCase(tag)}/`
      )
      createNodeField({ node, name: "tagSlugs", value: tagSlugs })
    }

    if (node.frontmatter.categories) {
      const categorySlugs = node.frontmatter.categories.map(
        c => `/categories/${_.kebabCase(c)}/`
      )
      createNodeField({ node, name: "categorSlugs", value: categorySlugs })
    }

    let date = new Date(node.frontmatter.date)
    if (isNaN(date.getTime())) {
      date = new Date("0001-01-01")
    }
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const year_month = `${year}-${month}`
    const day = date.getDate()

    createNodeField({ node, name: "year", value: year })
    createNodeField({ node, name: "month", value: month })
    createNodeField({ node, name: "year-month", value: year_month })
    createNodeField({ node, name: "day", value: day })
  }
}

module.exports = onCreateNode
