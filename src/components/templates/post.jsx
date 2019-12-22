import React from "react"
import Layout from "../particles/layout"

const PostTemplate = props => (
  <Layout {...props}>
    <h1>{props.pageContext.title}</h1>
  </Layout>
)

export default PostTemplate
