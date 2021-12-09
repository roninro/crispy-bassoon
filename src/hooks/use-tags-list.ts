import { useStaticQuery, graphql } from "gatsby"
import { Group } from "../types"

const useTagsList: () => Group[] = () => {
  const { allMdx } = useStaticQuery(graphql`
    query TagsListQuery($field: MdxFieldsEnum = frontmatter___tags) {
      allMdx(
        filter: {
          fields: { section: { eq: "posts" } }
          frontmatter: { draft: { ne: true } }
        }
      ) {
        group(field: $field) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  return allMdx.group
}

export default useTagsList
