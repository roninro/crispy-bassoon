/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import { Link } from "gatsby"
import _ from "lodash"
import { useTagsList } from "../../hooks"
import Card from "./card"

export const TagCloud = () => {
  const tags = useTagsList()

  const smallest = 8
  const largest = 22

  let font_spread = largest - smallest
  if (font_spread < 0) {
    font_spread = 1
  }
  const min_count = _.minBy(tags, "totalCount")?.totalCount ?? 0
  const max_count = _.maxBy(tags, "totalCount")?.totalCount ?? 0

  let spread = max_count - min_count
  if (spread <= 0) {
    spread = 1
  }
  const font_step = font_spread / spread

  return (
    <Card title="Tags">
      <div>
        {tags.map((t, i) => (
          <Link
            key={i}
            to={`/tags/${_.kebabCase(t.fieldValue)}`}
            css={css`
              font-size: ${smallest + (t.totalCount - min_count) * font_step}px;
              margin-right: 2px;
              margin-left: 2px;
            `}
          >{`${t.fieldValue}`}</Link>
        ))}
      </div>
    </Card>
  )
}
