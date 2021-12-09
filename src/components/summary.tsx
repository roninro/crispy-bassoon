/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Node } from "../types"
import {
  PostContent,
  EntryStyle,
  EntryArticle,
  FeaturedImageCss,
  PostByline,
  PostHeader,
  PostTitle,
  PostContainer,
  MoreLinkStyle,
} from "./styles"

type Props = {
  node: Node
}

const Summary = (props: Props) => {
  const { node } = props

  let image
  if (node.frontmatter.featuredImage) {
    image = getImage(node.frontmatter.featuredImage)
  }

  return (
    <EntryStyle>
      <EntryArticle>
        {image && (
          <Link to={node.fields.slug}>
            <GatsbyImage
              css={FeaturedImageCss}
              image={image}
              alt={node.frontmatter.title}
            />
          </Link>
        )}
        <PostContainer>
          <PostHeader>
            <PostTitle>
              <Link to={node.fields.slug}>{node.frontmatter.title} </Link>{" "}
            </PostTitle>
            <PostByline>
              Published on <time className="date">{node.frontmatter.date}</time>
              
              {/* by{" "}
              <a className="author" href="/">
                mervin
              </a> */}
            </PostByline>
          </PostHeader>
          <PostContent>
            <p>
              {node.frontmatter.excerpt
                ? node.frontmatter.excerpt
                : node.excerpt}
            </p>
            <div css={css`display: inline-block;`}>
              <Link to={node.fields.slug} css={MoreLinkStyle} >阅读全文</Link>
            </div>
            
          </PostContent>
        </PostContainer>
      </EntryArticle>
    </EntryStyle>
  )
}

export default Summary
