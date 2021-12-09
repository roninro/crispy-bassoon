import { css } from "@emotion/react"
import { faCalendar, faFolder, faTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

type Props = {
  title: string
}

export const CategoryArchiveHeader = ({ title }: Props) => {
  return (
    <div css={ArchiveHeaderCss}>
      <h1>
        <FontAwesomeIcon icon={faFolder} />
        分类： <span>{title}</span>
      </h1>
    </div>
  )
}

export const TagArchiveHeader = ({ title }: Props) => {
  return (
    <div css={ArchiveHeaderCss}>
      <h1>
        <FontAwesomeIcon icon={faTag} />
        标签： <span>{title}</span>
      </h1>
    </div>
  )
}


export const CalendarArchiveHeader = ({ title }: Props) => {
  return (
    <div css={ArchiveHeaderCss}>
      <h1>
        <FontAwesomeIcon icon={faCalendar} />
        月度归档： <span>{title}</span>
      </h1>
    </div>
  )
}






const ArchiveHeaderCss = css`
  margin-bottom: 0.75em;
  color: #fff;
  svg {
    margin-right: 5px;
  }
  p,
  h1,
  h2 {
    font-size: 0.875em;
    line-height: 1.715;
  }
  h1,
  h2 {
    display: inline-block;
    font-weight: 300;
    background: #242424;
    padding: 6px 14px;
  }
  h1 .query,
  h2 .query {
    font-weight: 700;
  }
  i {
    margin-right: 4px;
  }
  p {
    display: inline-block;
    margin: 0;
    color: #d4d4d4;
    background: #242424;
    padding: 6px 14px;
  }
`
