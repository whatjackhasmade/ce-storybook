import React from "react"
import { node } from "prop-types"

import StyledArticle from "./article.styles"

const Article = ({ children }) => <StyledArticle>{children}</StyledArticle>

Article.propTypes = {
  children: node.isRequired,
}

export default Article
