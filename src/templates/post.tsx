/** @jsx jsx */
import MDX from "@components/mdx"
import { css, jsx } from "@emotion/react"
import { Giscus } from "@giscus/react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Page from "@components/page"
import { PostMeta } from "@components/post-meta"
import {
  LoopContainer,
  PostContent,
  EntryStyle,
  EntryArticle,
  FeaturedImageCss,
  PostByline,
  PostHeader,
  PostTitle,
  PostContainer,
} from "@components/styles"
import { useSiteMetadata } from "../hooks"
import IndexLayout from "../layouts"
import { Mdx } from "../types"

type Props = {
  data: Mdx
  pageContext: {
    prev: any
    next: any
  }
}

const IndexTemplate = ({ data, pageContext, path }: Props & PageProps) => {
  const { title: siteTitle, giscus } = useSiteMetadata()

  const next = pageContext.next
    ? {
        url: `${pageContext.next.fields.slug}`,
        title: pageContext.next.frontmatter.title,
      }
    : undefined
  const prev = pageContext.prev
    ? {
        url: `${pageContext.prev.fields.slug}`,
        title: pageContext.prev.frontmatter.title,
      }
    : undefined

  const node = data.mdx

  const pageTitle = `${data.mdx.frontmatter.title} - ${siteTitle}`

  return (
    <IndexLayout path={path}>
      <Page title={pageTitle}>
        <LoopContainer>
          <EntryStyle>
            <EntryArticle>
              {node.frontmatter.featuredImage && (
                <GatsbyImage
                  css={FeaturedImageCss}
                  image={getImage(node.frontmatter.featuredImage)!}
                  alt={node.frontmatter.title}
                />
              )}
              <PostContainer>
                <PostHeader>
                  <PostTitle>{node.frontmatter.title}</PostTitle>
                  <PostByline>
                    Published on {" "} <time className="date" dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
                  </PostByline>
                </PostHeader>
                <PostContent>
                  {/* <MDXRenderer>{node.body}</MDXRenderer> */}
                  <MDX images={node.frontmatter.images}>{node.body}</MDX>
                </PostContent>

                <PostMeta
                  next={next}
                  prev={prev}
                  categories={node.frontmatter.categories}
                  tags={node.frontmatter.tags}
                />
              </PostContainer>
            </EntryArticle>

            {node.frontmatter.comment !== false && (
              <div
                css={css`
                  background: #fff;
                  padding: 1.5em 5.7875375%;
                  @media all and (min-width: 56.25em) {
                    padding: 1.5em 7.50006%;
                  }
                `}
              >
                <Giscus
                  repo={giscus.repo}
                  repoId={giscus.repoId}
                  category={giscus.category}
                  categoryId={giscus.categoryId}
                  mapping={giscus.mapping}
                  reactionsEnabled={giscus.reactionsEnabled}
                  emitMetadata={giscus.emitMetadata}
                  theme={giscus.theme}
                />
              </div>
            )}
          </EntryStyle>
        </LoopContainer>
      </Page>
    </IndexLayout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        categories
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        images {
          childImageSharp {
            gatsbyImageData(
              height: 300
              placeholder: BLURRED
            )
            original {
              height
              width
              src
            }
          }
        }
      }
      timeToRead
      body
      excerpt
      fields {
        slug
      }
    }
  }
`

export default IndexTemplate
