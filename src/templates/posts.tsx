import { graphql, Link, PageProps } from "gatsby"
import { css } from "@emotion/react"

import IndexLayout from "../layouts"
import { AllMdx } from "../types"
import Page from "../components/page"
import {
  LoopContainer,
  PostContent,
  EntryStyle,
  EntryArticle,
  PostHeader,
  PostTitle,
  PostContainer,
} from "../components/styles"
import { useSiteMetadata } from "@hooks"


type Props = {
  data: AllMdx
}

const ArchiveTemplate = ({ data, path }: Props & PageProps) => {
  const { title: siteTitle } = useSiteMetadata()
  const { group } = data.allMdx
  const hTitle = '所有文章'
  const pageTitle = `${hTitle} - ${siteTitle}`

  return (
    <IndexLayout path={path}>
      <Page title={pageTitle}>
        <LoopContainer>
          <EntryStyle>
            <EntryArticle>
              <PostContainer>
                <PostHeader>
                  <PostTitle>{hTitle}</PostTitle>
                </PostHeader>
                <PostContent>
                  {group.sort((a, b) => Number(b.fieldValue) - Number(a.fieldValue)).map(({ fieldValue, nodes }) => (
                    <div key={fieldValue}>
                      <h3>
                        {fieldValue}
                      </h3>
                      <ul>
                        {nodes.map(node => (
                          <li key={node.id} className="archive-list" css={ArchiveItemCss}>
                            
                            <Link to={node.fields.slug}>
                              {node.frontmatter.title}
                            </Link>
                            <span css={css`color: #a9a9b3`}>
                              {node.frontmatter.date}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </PostContent>
              </PostContainer>
            </EntryArticle>
          </EntryStyle>
        </LoopContainer>
      </Page>
    </IndexLayout>
  )
}

export const query = graphql`
  query ArchiveTemplate {
    allMdx(
      filter: {
        fields: { section: { eq: "posts" } }
        frontmatter: { draft: { ne: true } }
      }
      limit: 2000
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      group(field: fields___year) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
            year
          }
        }
        fieldValue
        totalCount
      }
    }
  }
`

const ArchiveItemCss = css`
display: flex;
justify-content: space-between;
font-size: 0.9em;
line-height: 2em;
a {
  font-weight: 400;
  text-decoration: auto;
  -webkit-text-decoration: auto;
}
`


export default ArchiveTemplate
