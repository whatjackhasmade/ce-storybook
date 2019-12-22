import { HttpLink } from "apollo-link-http"
import fetch from "unfetch"

const uri = process.env.GATSBY_GRAPHQL_API
  ? process.env.GATSBY_GRAPHQL_API // If available use Gatsby ENV
  : process.env.GRAPHQL_API // Else use standard ENV

const httpLink = new HttpLink({
  fetch,
  uri,
})

export default httpLink
