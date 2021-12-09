const createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, printTypeDefinitions } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    
    type Frontmatter @dontInfer {
      title: String!
      date: Date @dateformat
      categories: [String]
      tags: [String]
      excerpt: String
      comment: Boolean
      draft: Boolean
      featuredImage: File @fileByRelativePath
      images: [File] @fileByRelativePath
    }
    `)

  printTypeDefinitions({})
}

module.exports = createSchemaCustomization
