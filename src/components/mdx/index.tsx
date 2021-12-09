import Code from "@components/code-block"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer, MDXRendererProps } from "gatsby-plugin-mdx"

export interface MDXProps extends MDXRendererProps {}

const components = {
  pre: (props: any) => <Code {...props} />,
}

const MDX = ({ content, children, ...props }: MDXProps) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer {...props}>{children}</MDXRenderer>
    </MDXProvider>
  )
}

export default MDX
