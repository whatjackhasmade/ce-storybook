import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { isInternal } from "../../helpers"

const { bool, node, string } = PropTypes

const AnchorLink = ({ children, className, disabled, href, rel, target }) => {
  if (!children) return null
  if (!href) return null
  href = href.replace(process.env.GATSBY_DOMAIN, "")
  href = href.replace(process.env.GATSBY_WORDPRESS_API, "")

  // If the URL isn't internal, return an anchor tag
  if (!isInternal(href))
    return (
      <a
        className={className}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener norefferer" : null}
      >
        {children}
      </a>
    )

  href = href.startsWith("/") ? href : `/` + href

  // Otherwise, use the Gatsby Link component
  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  )
}

// Expected prop values
AnchorLink.propTypes = {
  children: node.isRequired,
  disabled: bool.isRequired,
  href: string,
  rel: string,
  target: string,
}

AnchorLink.defaultProps = {
  disabled: false,
}

export default AnchorLink
