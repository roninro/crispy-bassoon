import styled from "@emotion/styled"
import React from "react"
import { Helmet } from "react-helmet"
import { EntryStyle } from "./styles"

type Props = {
  title?: string
  children: React.ReactNode
}

const Page = ({ title, children }: Props) => {
  return (
    <MainSection>
      <Helmet title={title} />
      <EntryStyle>{children} </EntryStyle>
    </MainSection>
  )
}

const MainSection = styled.section`
  margin: 0 auto;

  @media all and (min-width: 56.25em) {
    width: 62.5005%;
    float: left;
    margin-right: 3.125025%;
  }
`

export default Page
