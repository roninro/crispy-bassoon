/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import { Link } from "gatsby"
import _ from "lodash"

type Props = {
  tags?: string[]
  categories?: string[]
  prev?: Readings
  next?: Readings
}

type Readings = {
  url: string
  title: string
}

// .post-categories
const PostCategoriesCss = css`
  font-size: 0.875em;
  line-height: 1.715;
  margin-bottom: 1.71em;
  a {
    font-weight: 700;
  }
  a:hover,
  a:active,
  a:focus {
    text-decoration: underline;
  }
`

// .post-tags
const PostTagsCss = css`
  margin-bottom: 1.125em;
  ul {
    list-style: none;
    margin: 0;
  }
  li {
    display: inline-block;
  }
  a {
    font-size: 0.875em;
    line-height: 1.715;
    display: inline-block;
    padding: 0 12px;
    border: solid 1px #333;
    margin: 0 6px 6px 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  a:hover,
  a:active,
  a:focus {
    background: #333;
    color: #fff;
  }
`

// .further-reading
const furtherReading = css`
  margin-bottom: 0.75em;
  a,
  span {
    font-size: 0.75em;
    line-height: 1.5;
  }

  .previous {
    margin-bottom: 0.75em;
  }
  a {
    font-weight: 700;
    display: block;
  }
  a:hover,
  a:active,
  a:focus {
    text-decoration: underline;
  }

  @media all and (min-width: 37.5em) {
    div {
      width: 50%;
      display: inline-block;
      vertical-align: top;
      margin-right: -4px;
    }
    .previous {
      margin-bottom: 0;
    }
    .next {
      text-align: right;
    }
  }
`

export const PostMeta = (props: Props) => {
  const { prev, next } = props

  const prevDiv = prev ? (
    <div className="previous">
      <span>Previous Post</span>
      <Link to={prev.url}>{prev.title}</Link>
    </div>
  ) : (
    <div className="previous">
      <span>No Older Posts</span>
      <Link to="/">Return to Blog</Link>
    </div>
  )

  const nextDiv = next ? (
    <div className="next">
      <span>Next Post</span>
      <Link to={next.url}>{next.title}</Link>
    </div>
  ) : (
    <div className="next">
      <span>No Newer Posts</span>
      <Link to="/">Return to Blog</Link>
    </div>
  )

  let categories
  if (props.categories) {
    categories = (
      <p css={PostCategoriesCss}>
        <span>Published in </span>
        {props.categories.map((category, index) => (
          <Link
            key={index}
            to={`/categories/${_.kebabCase(category)}`}
            css={css`
              margin-right: 4px;
            `}
          >
            {category}
          </Link>
        ))}
      </p>
    )
  }

  return (
    <div
      css={css`
        margin: 1.875em 0 0.75em;
      `}
    >
      {categories}

      <div css={PostTagsCss}>
        <ul>
          {props.tags &&
            props.tags.map((tag, index) => (
              <li key={index}>
                <Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
              </li>
            ))}
        </ul>
      </div>
      <nav css={furtherReading}>
        {prevDiv}
        {nextDiv}
      </nav>
    </div>
  )
}
