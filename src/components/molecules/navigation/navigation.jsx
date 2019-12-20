import React from "react";
import Link from "gatsby-link";
import { arrayOf, shape, string } from "prop-types";
import { isInternal } from "../../helpers";

import StyledNavigation from "./navigation.styles";

const Navigation = ({ items }) => {
	if (!items) return null;
	return (
		<StyledNavigation className="navigation">
			{items.map(({ label, target, url }) => {
				// If the URL isn't internal, return an anchor tag
				if (!isInternal(url))
					return (
						<a href={url} target={target}>
							{label}
						</a>
					);
				// Otherwise, use the Gatsby Link component
				return <Link to={url}>{label}</Link>;
			})}
		</StyledNavigation>
	);
};

// Expected prop values
Navigation.propTypes = {
	items: arrayOf(
		shape({
			label: string,
			target: string,
			url: string
		})
	).isRequired
};

export default Navigation;
