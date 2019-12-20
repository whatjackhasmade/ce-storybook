import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { isInternal } from "../../helpers";

const { bool, node, string } = PropTypes;

const AnchorLink = ({ children, disabled, href, rel, target }) => {
	console.log(href);

	if (!children) return null;
	if (!href) return null;

	// If the URL isn't internal, return an anchor tag
	if (!isInternal(href))
		return (
			<a
				href={href}
				target={target}
				rel={target === "_blank" ? "noopener norefferer" : null}
			>
				{children}
			</a>
		);

	// Otherwise, use the Gatsby Link component
	return <Link to={href}>{children}</Link>;
};

// Expected prop values
AnchorLink.propTypes = {
	children: node.isRequired,
	disabled: bool.isRequired,
	href: string,
	rel: string,
	target: string
};

AnchorLink.defaultProps = {
	disabled: false
};

export default AnchorLink;
