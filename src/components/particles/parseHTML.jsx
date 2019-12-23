import React from "react"
import Parser from "html-react-parser"
import { isInternal } from "../helpers"

import Link from "../atoms/link/link"

const config = {
  replace: data => {
    const { attribs, parent } = data
    if (attribs && attribs.href) {
      const { children, href } = attribs

      if (href && children)
        return (
          <Link {...attribs} href={href}>
            {children}
          </Link>
        )
    }
  },
}

export const ParseHTML = html => {
  const clean = Parser(html, config)
  return clean
}

export default ParseHTML
