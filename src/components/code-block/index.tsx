/** @jsx jsx */
import Copy from "@components/copy"
import { jsx, css } from "@emotion/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwlLight"
import { preToCodeBlock } from "./preToCodeBlock"

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = meta => {
  if (!RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)))
  return index => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

type Props = {
  codeString: string
  language: string
  title?: string
  metastring?: string
  [key: string]: any
}

const SyntaxHiglight = ({
  codeString,
  language,
  title,
  metastring,
  ...props
}: Props) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language as any}
      theme={theme}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div css={CodeBlockStyle}>
          {title && (
            <div className="code-title">
              <div>
                {title}
              </div>
            </div>
          )}

          <div className="gatsby-highlight" data-language={language}>
            <div className="copy-container">
              <Copy className="copy" text={codeString} />
            </div>
            <pre className={language && className} style={style}>
              <code >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })

                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`
                }

                return (
                  <div {...lineProps}>
                    <span className="line-number">{i + 1}</span>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
              </code>
            </pre>
          </div>
        </div>
      )}
    </Highlight>
  )
}

const CodeBlockStyle = css`
  margin-bottom: 1.25em;

  .code-title {
    padding: 1em 1em;
    background-color: #f6f8fa;
    color: #6a737d;
    border-radius: 6px 6px 0 0;
    border-bottom: 1px solid #e1e4e8;
    font-size: 0.875rem;
  }

  .gatsby-highlight {
    padding: 0;
    margin: 0;
    position: relative;
    // font-size: 1rem;
    display: block;
  }

  .gatsby-highlight pre[class*="language-"] {
    padding: 16px 0;
  }

  .gatsby-highlight:hover .copy-container {
    display: block;
    animation: fade-in 200ms both;
  }
  .gatsby-highlight .copy-container {
    display: none;
    animation: fade-out 200ms both;
  }
  .gatsby-highlight code {
    float: left;
    min-width: 100%;
    color: inherit;
    background-color: transparent;
  }
  .copy-container {
    position: absolute !important;
    display: block;
    animation: fade-in 200ms both;
    right: 0 !important;
    top: 0 !important;
  }

  .copy {
    position: relative;
    padding: 0 !important;
    margin: 8px !important;

    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid;
    border-radius: 6px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-color: #f6f8fa;
    border-color: rgb(27 31 36 / 15%);
  }

  .prism-code {
    margin: 0;
  }

  .line-number {
    display: inline-block;
    padding-left: 1em;
    padding-right: 1em;
    width: 40px;
    user-select: none;
    opacity: 0.3;
    text-align: right;
    position: relative;
  }

  .highlight-line {
    display: block;
    // background-color: #eee;
    // border-left: 4px solid rgb(2, 155, 206);
    background: linear-gradient(
      90deg, rgb(140, 175, 255) 0%, rgb(140, 175, 255) 0.5%, rgb(243, 242, 248) 0.5%, rgb(243, 242, 248) 100%);      
  }

  .highlight-line .line-number {
    opacity: 0.5;
    left: -2px;
  }
`

const CodeBlock = (preProps: any) => {
  const props = preToCodeBlock(preProps)
  if (props) {
    return <SyntaxHiglight {...props} />
  } else {
    return <pre {...preProps} />
  }
}
export default CodeBlock
