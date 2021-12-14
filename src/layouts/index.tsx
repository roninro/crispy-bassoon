/** @jsx jsx */
import { Categories } from "@components/cards/categories"
import { Profile } from "@components/cards/profile"
import { RecentPosts } from "@components/cards/recent-posts"
import { TagCloud } from "@components/cards/tag-cloud"
import Header from "@components/header"
import { globalStyles } from "@components/styles"
import { css, jsx, Global } from "@emotion/react"
import styled from "@emotion/styled"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/700.css"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import * as React from "react"
import { useSiteMetadata } from "../hooks"

type Props = {
  path?: string
  children: React.ReactNode
}

const IndexLayout = ({ path, children }: Props) => {
  const site = useSiteMetadata()

  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 200) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* <Global styles={globalStyles} /> */}
      <OverFlowContainer>
        <Header
          title={site.title}
          subTitle={site.subtitle}
          menu={site.menu}
          currentPath={path}
          social={[]}
        />
        <PrimaryContainerStyle>
          <div >
            {children}

            <SidebarStyle>
              <Profile />
              <RecentPosts />
              <Categories />
              <TagCloud />
            </SidebarStyle>
          </div>
        </PrimaryContainerStyle>

        <SiteFooter>
          <div className="max-width"></div>
          <div className="design-credit">
            <Link to="/"> &copy; 2016 - {new Date().getFullYear()} </Link>
          </div>
        </SiteFooter>
      </OverFlowContainer>

      <ScrollToTopButton
        css={css`
          -webkit-transform: ${visible
            ? "translateY(-45px)"
            : "background 0.2s, -webkit-transform 0.3s"};
          transform: ${visible
            ? "translateY(-45px)"
            : "background 0.2s, transform 0.3s"};
        `}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </ScrollToTopButton>
    </>
  )
}

const OverFlowContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  min-height: 100%;
`

const SidebarStyle = styled.aside`
  @media (min-width: 56.25em) {
    width: 34.375275%;
    float: left;
    margin-top: 3em;
  }
`

const PrimaryContainerStyle = styled.div`
  padding: 0 5.5556%;
  margin-top: -5.25em;
  min-height: 100vh;
  min-height: calc(100vh - 291px);
  $:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
`

const SiteFooter = styled.footer`
  text-align: center;
  background: #333333;
  margin-top: 3.75em;
  color: #d4d4d4;
  clear: both;
  a {
    font-weight: 700;
  }
  a:link,
  a:visited,
  a:active,
  a:focus,
  a:hover {
    color: white;
  }
  .design-credit {
    background: #242424;
    padding: 9px 5.5556%;
    margin-top: 1.875em;
  }
`

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: -45px;
  right: 0;
  z-index: 9;
  background: #242424;
  border: none;
  color: #fff;
  padding: 9px 0;
  width: 60px;

  $:hover {
    cursor: pointer;
    background: #666;
  }
  $:hover svg {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  svg {
    font-size: 20px;
    -webkit-transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
  }
`

export default IndexLayout
