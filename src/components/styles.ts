import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const globalStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #aaa;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }

  body {
    height: 100%;
    font-size: 100%;
    font-weight: 300;
    margin: 0;
    padding: 0;
    font-family: roboto, open sans, sans-serif;
    line-height: 1.5;
    background: #ededed;
    color: #333333;
    -webkit-font-smoothing: subpixel-antialiased;
    word-wrap: break-word;
    -ms-word-wrap: break-word;
  }

  .max-width {
    max-width: 1300px;
    margin: 0 auto;
  }

  p {
    margin: 1.5em 0;
  }

  a {
    color: #333333;
    text-decoration: none;
    -webkit-transition: 0.1s ease-in-out;
    transition: 0.1s ease-in-out;
  }
  a:link,
  a:visited {
    color: #333333;
  }
  a:hover,
  a:active,
  a:focus {
    color: #757575;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Roboto", "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 700;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1em;
    line-height: 1.5;
  }

  ul,
  ol {
    font-size: 1em;
    padding: 0;
    margin: 1.5em;
  }
  ul ul,
  ul ol,
  ol ul,
  ol ol {
    margin: 0 1.5em;
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul,
  li li {
    font-size: 1em;
  }

  /* Markup styles */
  pre {
    word-wrap: break-word;
    background: #f5f5f5;
    // padding: 0.75em;
    overflow: auto;
  }

  code {
    background: #f5f5f5;
    padding: 0.2em 0.375em;
    font-size: 0.875em;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    color: #e74c3c;
  }

  pre code {
    padding: 0;
  }

  blockquote {
    margin: 1.5em 1.5em 1.5em 0;
    padding-left: 1.5em;
    border-left: solid 3px #333333;
  }
  blockquote cite {
    display: block;
    text-align: right;
  }

  hr {
    margin: 1.5em 0;
  }

  /* Table styles */
  table {
    border-spacing: 0;
    border-collapse: collapse;
    margin: 1.5em 0;
  }

  td,
  th {
    padding: 0.75em;
    border: solid 1px #333333;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* ie image border fix */
  a img {
    border: none;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: landscape) {
    html {
      -webkit-text-size-adjust: none;
      /* none for no scaling */
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    html {
      -webkit-text-size-adjust: none;
      /* none for no scaling */
    }
  }

  @media all and (min-width: 37.5em) {
    h1 {
      font-size: 1.3125em;
      /* 21px / 16px */
      line-height: 1.333;
      /* 28px */
    }

    h2 {
      font-size: 1.125em;
      /* 18px / 16px */
      line-height: 1.333;
      /* 24px */
    }
  }
  @media all and (min-width: 68.75em) {
    h1 {
      font-size: 1.75em;
      /* 28px / 16px */
      line-height: 1.357;
      /* 38px */
    }

    h2 {
      font-size: 1.3125em;
      /* 21px / 16px */
      line-height: 1.333;
      /* 28px */
    }

    h3 {
      font-size: 1.125em;
      /* 18px / 16px */
      line-height: 1.333;
      /* 24px */
    }
  }
`

export const LoopContainer = styled.div`
  $:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
`

export const MoreLinkStyle = css`
  font-size: 0.875em;
  line-height: 1.715;
  display: inline-block;
  text-decoration: none !important;
  border: solid 1px #333;
  padding: 6px 12px;
  margin-right: 12px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  $:hover,
  $:active,
  $:focus {
    color: #fff;
    background: #333;
  }
`

export const PostContent = styled.div`
  a {
    text-decoration: underline;
    font-weight: 700;
  }
  a:hover,
  a:active,
  a:focus {
    text-decoration: none;
  }
  iframe {
    max-width: 100%;
  }
  $:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
`

export const EntryStyle = styled.div`
  position: relative;
  margin-bottom: 1.5em;
`

export const EntryArticle = styled.article`
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(58, 58, 58, 0.2);
`

export const FeaturedImageCss = css`
  position: relative;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 0;
  }
  a:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0;
    -webkit-transition: opacity 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out;
  }

  a:focus:after {
    opacity: 0.2;
  }
  img,
  a > img {
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
  img.no-object-fit,
  a > img.no-object-fit {
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    top: 50%;
    right: 50%;
    left: auto;
    -webkit-transform: translateX(50%) translateY(-50%);
    transform: translateX(50%) translateY(-50%);
  }
`

export const PostHeader = styled.div`
  margin: 0 0 1.5em;
`

export const PostTitle = styled.h2`
  font-size: 1.125em;
  line-height: 1.333;
`

export const PostByline = styled.div`
  font-size: 0.75em;
  line-height: 1.5;

  .date,
  .author {
    font-weight: 700;
  }
  .date:hover,
  .date:active,
  .date:focus,
  .author:hover,
  .author:active,
  .author:focus {
    text-decoration: none;
  }
`

export const PostContainer = styled.div`
  padding: 1.5em 4.6875375%;
  margin-bottom: 0.75em;
  @media all and (min-width: 56.25em) {
    padding: 1.5em 7.50006%;
  }
  @media all and (min-width: 68.75em) {
    padding: 1.875em 7.50006% 2.25em;
    ${PostTitle} {
      font-size: 1.75em;
      line-height: 1.357;
    }
  }
`
