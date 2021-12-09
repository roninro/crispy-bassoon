// @flow
// Converted automatically using ./tools/themeFromVsCode
// import type { PrismTheme } from '../types'
import { PrismTheme } from "prism-react-renderer"

const theme: PrismTheme = {
  plain: {
    color: "#24292f",
    backgroundColor: "#ffffff",
  },
  styles: [
    {
      types: ["comment", "punctuation", "string"],
      style: {
        color: "rgb(110, 119, 129)",
      },
    },
    {
      types: ["constant", "builtin", "variable"],
      style: {
        color: "rgb(5, 80, 174)",
      },
    },
    {
      types: ["function"],
      style: {
        color: "rgb(130, 80, 223)",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(17, 99, 41)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(130, 7, 30)",
        backgroundColor: "rgb(255, 235, 233)",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(17, 99, 41)",
        backgroundColor: "rgb(218, 251, 225)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(149, 56, 0)",
        backgroundColor: "rgb(255, 216, 181)",
      },
    },
  ],
}

export default theme
