import React from "react"

import Layout from "../particles/layout"
import ParseHTML from "../particles/parseHTML"

import Article from "../molecules/article/article"
import ComponentParser from "../particles/componentParser"

const PageTemplate = props => (
  <Layout {...props}>
    <PageContent {...props.pageContext} />
  </Layout>
)

const PageContent = ({ blocks, content, title }) => {
  if (blocks && blocks.length) return <ComponentParser content={blocks} />

  return (
    <>
      <Article>
        <h1>{title}</h1>
        {content && ParseHTML(content)}
      </Article>
    </>
  )
}

export default PageTemplate
