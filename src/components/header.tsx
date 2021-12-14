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
    <button
      className="border-0 mx-0 mt-6 mb-7.5 hover:cursor-pointer md:hidden"
      onClick={onClick}
      aria-label="toggle"
    >
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
    </button>
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
    <header className="bg-t-dark text-white pt-9 pb-21 px-p5p text-center md:text-left">
      <div className="max-w-screen-xl">
        <div className="md:relative md:mb-9 md:float-left">
          <div className="md:inline-block font-bold text-2xl text-white">
            <Link to="/" className="focus:text-t-hover hover:text-t-hover">
              {props.title}
            </Link>
          </div>
          <p className="md:inline-block text-zinc-300 m-0 md:ml-2">
            {props.subTitle}
          </p>
        </div>

        <ToggleButton onClick={toogle}>Click Me</ToggleButton>

        <div
          className="relative max-h-0 overflow-hidden md:overflow-visible md:mb-7.5 md:max-h-fit"
          ref={containerRef}
        >
          <div className="text-white ml-6 mr-9 md:m-0 md:clear-both" ref={navRef}>
            <nav className="menu">
              <ul className="m-0 list-none">
                {props.menu.map((item, index) => (
                  <li
                    key={index}
                    className={
                      "mb-1.5 inline-block mx-0 mr-3 last:mb-1.5 text-"
                    }
                  >
                    <Link className={"bg-transparent inline-block"} to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
