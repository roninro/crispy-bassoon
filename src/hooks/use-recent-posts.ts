import { useStaticQuery, graphql } from "gatsby"
import { Group, Node, Nodes } from "../types"

const useRecentPosts: () => Nodes = () => {
  const { allMdx } = useStaticQuery(graphql`
    query RecentPostsQuery {
      allMdx(
        limit: 5
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          fields: { section: { eq: "posts" } }
          frontmatter: { draft: { ne: true } }
        }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
          id
        }
      }
    }
  `)
  return allMdx.nodes
}

export default useRecentPosts
