import styled from "@emotion/styled"
import { css } from "@emotion/react"
import React from "react"
import { Link } from "gatsby"

type Props = {
  currentPage: number
  totalPages: number
  prevPagePath: string
  nextPagePath: string
  hasPrevPage: boolean
  hasNextPage: boolean
}

const Pagination = ({
  currentPage,
  totalPages,
  prevPagePath,
  nextPagePath,
  hasPrevPage,
  hasNextPage,
}: Props) => {
  if (totalPages === 1) return null

  return (
    <PaginationCls>
      <div>
        {hasPrevPage && (
          <Link to={prevPagePath} rel="prev" className="prev page-numbers">
            Previous
          </Link>
        )}
        <a css={css`
          font-size: 90%;
        `}>
          {`page ${currentPage} of ${totalPages}`}
        </a>
        {hasNextPage && (
          <Link to={nextPagePath} rel="next" className="next page-numbers">
            Next
          </Link>
        )}
      </div>
    </PaginationCls>
  )
}

const PaginationCls = styled.nav`
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(58, 58, 58, 0.2);
  padding: 1.5em 4.6875375%;
  text-align: center;
  margin-bottom: 1.5em;

  .prev,
  .next {
    font-weight: 700;
  }
  .prev {
    float: left;
    margin-left: 0;
  }
  .prev:before {
    content: "«";
    margin-right: 4px;
  }
  .next {
    float: right;
    margin-right: 0;
  }
  .next:after {
    content: "»";
    margin-left: 4px;
  }
  a,
  span {
    margin: 0 0.75em;
  }
  a.current,
  span.current {
    padding: 2px 8px;
    background: #ededed;
  }
  @media all and (min-width: 56.25em) {
    padding: 1.5em 7.50006%;
  }
  @media all and (min-width: 37.5em) {
    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }
  }
`

export default Pagination
