import React from "react"

import Layout from "../particles/layout"
import ParseHTML from "../particles/parseHTML"

import Article from "../molecules/article/article"

const PageTemplate = props => (
  <Layout {...props}>
    <PageContent {...props.pageContext} />
  </Layout>
)

const PageContent = ({ content, title }) => (
  <>
    <Article>
      <h1>{title}</h1>
      {content && ParseHTML(content)}
    </Article>
  </>
)

export default PageTemplate
