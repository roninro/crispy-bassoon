import styled from "@emotion/styled"
import { Link } from "gatsby"
import * as React from "react"
import { Menu, IconLink } from "../types/index"

const TitleContainer = styled.div``

const SiteTitle = styled.div`
  font-weight: 700;
  font-size: 1.3125em;
  line-height: 1.333;
  a {
    color: #fff;
  }
`

const TagLine = styled.p`
  color: #d4d4d4;
  margin: 0;
  font-size: 0.875em;
  line-height: 1.715;
  font-
`

const IconContainer = styled.div`
  float: right;
`

const ToggleButtonStyle = styled.button`
  font-size: 1em;
  background: 0;
  padding: 0;
  border: none;
  margin: 1.5em 0 1.875em 0;
  $::hover {
    cursor: pointer;
  }
`

const SocialMediaIcon = styled.ul`
  list-style: none;
  margin: 0 0 1.5em 0;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  li {
    display: inline-block;
    margin-right: 20px;
  }
  li:last-child {
    margin-right: 0;
  }
  a {
    display: inline-block;
    vertical-align: middle;
    line-height: 0;
  }
  .fade {
    opacity: 0;
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }
  .custom-icon img {
    line-height: 0;
    margin: 0;
    width: 20px;
    height: auto;
  }
`

const MenuPrimary = styled.div`
  color: white;
  margin: 1.5em 0 2.25em;
  ul {
    margin: 0;
    list-style: none;
  }
  li {
    margin-bottom: 6px;
  }
  li:last-child {
    margin-bottom: 0;
  }

  li.current-menu-item > a,
  li.current_page_item > a,
  li.current-menu-ancestor > a {
    background: #242424;
  }
  li.current-menu-item > a:hover,
  li.current-menu-item > a:active,
  li.current-menu-item > a:focus,
  li.current_page_item > a:hover,
  li.current_page_item > a:active,
  li.current_page_item > a:focus,
  li.current-menu-ancestor > a:hover,
  li.current-menu-ancestor > a:active,
  li.current-menu-ancestor > a:focus {
    background: white;
  }
  a {
    font-size: 0.875em;
    line-height: 1.715;
    color: white;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    z-index: 9;
    overflow: hidden;
    padding: 0 8px 2px 8px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  a:hover,
  a:active,
  a:focus {
    color: #333333;
    background: white;
  }
  ul ul {
    max-height: 0;
    overflow: hidden;
    -webkit-transition: max-height 0.3s ease-in-out;
    transition: max-height 0.3s ease-in-out;
  }
  ul ul li:first-of-type {
    margin-top: 6px;
  }
  ul ul li:last-child {
    margin-bottom: 6px;
  }
  ul ul li.current-menu-item > a,
  ul ul li.current_page_item > a {
    background: none;
    font-weight: 700;
  }
  .toggle-dropdown {
    display: inline-block;
    vertical-align: middle;
    font-size: 1em;
    margin: 0 -26px 0 2px;
    padding: 2px 6px;
    border: solid 1px #d4d4d4;
    background: none;
    color: white;
  }
  .toggle-dropdown:hover {
    cursor: pointer;
  }
  .toggle-dropdown .arrow {
    display: inline-block;
  }
  .toggle-dropdown .arrow:after {
    content: "";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
  .open > ul {
    max-height: 999px;
  }
  .open > .toggle-dropdown .arrow {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  @media all and (min-width: 56.25em) {
    margin: 0;
    clear: both;

    .toggle-navigation {
      display: none;
    }

    .toggle-dropdown {
      display: none;
    }
    li {
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }
    li:hover,
    li:active {
      color: #333333;
      background: white;
    }
    li:hover > a,
    li:active > a {
      color: #333333;
      background: white;
    }
    ul ul {
      position: absolute;
      z-index: 19;
      top: 100%;
      top: calc(100% + 4px);
      max-height: none;
      overflow: visible;
      background: white;
      left: 0;
      opacity: 0;
      visibility: hidden;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }
    ul ul:hover,
    ul ul.focused {
      opacity: 1;
      visibility: visible;
      top: 100%;
    }
    ul ul li {
      white-space: nowrap;
      margin: 0 10px 6px 0;
    }
    ul ul li.current-menu-ancestor {
      background: none;
    }
    ul ul li.current-menu-ancestor > a {
      background: none;
      font-weight: 700;
    }
    ul ul a {
      color: #333333;
      width: 100%;
    }
    ul ul a:link,
    ul ul a:visited {
      color: #333333;
    }
    li {
      display: inline-block;
      margin: 0 10px 0 0;
    }
    li.menu-item-has-children {
      position: relative;
      /***** Tier 3+ *****/
    }
    li.menu-item-has-children:hover > a:after {
      top: 2px;
    }
    li.menu-item-has-children > a:hover ~ ul,
    li.menu-item-has-children > a:active ~ ul,
    li.menu-item-has-children > a:focus ~ ul {
      opacity: 1;
      visibility: visible;
      top: 100%;
    }
    li.menu-item-has-children > a:hover:after,
    li.menu-item-has-children > a:active:after,
    li.menu-item-has-children > a:focus:after {
      top: 2px;
    }
    li.menu-item-has-children > a:after {
      content: "";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      position: relative;
      top: 0;
      margin-left: 4px;
      -webkit-transition: top 0.2s ease;
      transition: top 0.2s ease;
    }
    li.menu-item-has-children ul li {
      display: list-item;
    }
    li.menu-item-has-children ul .menu-item-has-children:hover a:after,
    li.menu-item-has-children ul .menu-item-has-children:active a:after {
      right: -2px;
      top: 0;
    }
    li.menu-item-has-children ul .menu-item-has-children > a:after {
      content: "";
      -webkit-transition: right 0.2s ease;
      transition: right 0.2s ease;
    }
    li.menu-item-has-children ul .menu-item-has-children > a:hover ~ ul,
    li.menu-item-has-children ul .menu-item-has-children > a:active ~ ul,
    li.menu-item-has-children ul .menu-item-has-children > a:focus ~ ul {
      opacity: 1;
      visibility: visible;
      top: -6px;
      left: 100%;
    }
    li.menu-item-has-children ul .menu-item-has-children > a:hover:after,
    li.menu-item-has-children ul .menu-item-has-children > a:active:after,
    li.menu-item-has-children ul .menu-item-has-children > a:focus:after {
      top: 0;
      right: -2px;
    }
    li.menu-item-has-children ul ul {
      top: -6px;
      left: 100%;
      left: calc(100% + 4px);
    }
    li.menu-item-has-children ul ul:hover,
    li.menu-item-has-children ul ul.focused {
      top: -6px;
      left: 100%;
    }
  }
`

const MenuPrimaryContainer = styled.div`
  position: relative;
  max-height: 0;
  overflow: hidden;
  -webkit-transition: max-height 0.3s ease-in-out;
  transition: max-height 0.3s ease-in-out;
`

const SiteHeader = styled.header`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 36px 5.5556% 5.25em;
  $:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
  @media all and (min-width: 56.25em) {
    text-align: left;

    ${TitleContainer} {
      position: relative;
      z-index: 9;
      margin-bottom: 2.25em;
      float: left;
    }
    ${SiteTitle},
    ${TagLine} {
      display: inline-block;
    }
    ${TagLine} {
      margin-left: 6px;
    }
    ${IconContainer} {
      float: right;
    }
    ${SocialMediaIcon} {
      display: inline-block;
      margin: 0;
    }
    ${MenuPrimaryContainer} {
      max-height: none;
      margin-bottom: 1.875em;
      overflow: visible;
    }
    ${ToggleButtonStyle} {
      display: none;
    }
  }
`

const ToggleButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <ToggleButtonStyle onClick={onClick} aria-label="toggle">
      <svg
        width="36px"
        height="23px"
        viewBox="0 0 36 23"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>mobile menu toggle button</desc>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-142.000000, -104.000000)" fill="#FFFFFF">
            <g transform="translate(142.000000, 104.000000)">
              <rect x="0" y="20" width="36" height="3"></rect>
              <rect x="0" y="10" width="36" height="3"></rect>
              <rect x="0" y="0" width="36" height="3"></rect>
            </g>
          </g>
        </g>
      </svg>
    </ToggleButtonStyle>
  )
}

type Props = {
  currentPath?: string
  title: string
  subTitle: string
  menu: Menu[]
  social: IconLink[]
}

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  //   const iconRef = React.useRef<HTMLDivElement>(null)
  const navRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    // if (!iconRef.current) throw Error("iconRef is not assigned")
    if (!navRef.current) throw Error("navRef is not assigned")

    if (isMenuOpen) {
      let height = navRef.current!.clientHeight + navRef.current.offsetTop * 2
      containerRef.current?.setAttribute("style", `max-height: ${height}px`)
    } else {
      containerRef.current?.removeAttribute("style")
    }
  })

  function toogle() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <SiteHeader>
      <div className="max-width">
        <TitleContainer>
          <SiteTitle>
            <Link to="/">{props.title}</Link>
          </SiteTitle>
          <TagLine>{props.subTitle}</TagLine>
        </TitleContainer>
        <ToggleButton onClick={toogle}>Click Me</ToggleButton>
        <MenuPrimaryContainer ref={containerRef}>
          <MenuPrimary ref={navRef}>
            <nav className="menu">
              <ul className="menu-primary-items">
                {props.menu.map((item, index) => (
                  <li
                    key={index}
                    className={
                      props.currentPath === item.path
                        ? `current-menu-item`
                        : `menu-item`
                    }
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </MenuPrimary>
        </MenuPrimaryContainer>
      </div>
    </SiteHeader>
  )
}

export default Header
