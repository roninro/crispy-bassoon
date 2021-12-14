import styled from "@emotion/styled"
import React from "react"

const CardStyle = styled.section`
  background: #fff;
  box-shadow: 0 0 2px 0 rgb(58 58 58 / 20%);
  padding: 1.5em 4.6875375%;
  margin-bottom: 0.75em;

  a:hover,
  a:active,
  a:focus {
    text-decoration: underline;
  }
  .card-title {
    font-size: 1em;
    line-height: 1.5;
    margin-bottom: 1.5em;
  }
  * {
    font-size: 0.875em;
    line-height: 1.715;
  }
  @media all and (min-width: 56.25em) {
    padding-top: 1.875em;
    background: white;
    box-shadow: 0 0 2px 0 rgb(58 58 58 / 20%);
    padding: 1.5em 7.5%;
  }
`

const Card = ({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) => {
  return (
    <CardStyle>
      {title && <h3 className="card-title">{title}</h3>}
      {children}
    </CardStyle>
  )
}

export default Card
