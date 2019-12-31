import React from "react"

import ParseHTML from "../particles/parseHTML"
import Layout from "../particles/layout"

import Article from "../molecules/article/article"

const PostTemplate = props => (
  <Layout {...props}>
    <PostContent {...props} />
  </Layout>
)

const PostContent = ({ pageContext }) => {
  const { content, title } = pageContext

  return (
    <Article>
      <h1>{title}</h1>
      {content && ParseHTML(content)}
    </Article>
  )
}

export default PostTemplate
