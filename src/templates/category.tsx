import { CategoryArchiveHeader } from "@components/archive-header"
import Page from "@components/page"
import Pagination from "@components/pagination"
import SEO from "@components/seo"
import { LoopContainer } from "@components/styles"
import Summary from "@components/summary"
import { graphql, PageProps } from "gatsby"
import IndexLayout from "../layouts"
import { AllMdx, PageContext } from "../types"

type Props = {
  data: AllMdx
  pageContext: PageContext
}

const CategoryTemplate = ({ data, pageContext, path }: Props & PageProps) => {

  const {
    category,
    currentPage,
    totalPages,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext

  const { edges } = data.allMdx

  return (
    <IndexLayout path={path}>
      <Page>
        <SEO title={category} description="" pathname={path} />
        <CategoryArchiveHeader title={category} />

        <LoopContainer>
          {edges.map((edge, i) => (
            <Summary key={i} node={edge.node} />
          ))}
        </LoopContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </IndexLayout>
  )
}

export const query = graphql`
  query CategoryTemplate(
    $postsLimit: Int!
    $postsOffset: Int!
    $category: String!
  ) {
    allMdx(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: { draft: { ne: true }, categories: { in: [$category] } }
        fields: { section: { eq: "posts" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorSlugs
            tagSlugs
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            categories
            excerpt
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

export default CategoryTemplate
