import React from "react";
import PropTypes from "prop-types";

import StyledPanels from "./panels.styles";

import CTA from "../../atoms/cta/cta";

const { arrayOf, shape, string } = PropTypes;

const Panels = ({ items }) => {
	if (!items || !items.length) return null;
	return (
		<StyledPanels className="panels">
			<div className="panels__contents">
				{items.map(({ content, link, title }) => (
					<div className="panels__panel">
						<h3>{title}</h3>
						<p>{content}</p>
						<CTA {...link}>{link.label}</CTA>
					</div>
				))}
			</div>
		</StyledPanels>
	);
};

// Expected prop values
Panels.propTypes = {
	items: arrayOf(
		shape({
			content: string,
			link: shape({
				href: string,
				label: string,
				target: string
			}),
			title: string
		})
	)
};

Panels.defaultProps = {
	items: []
};

export default Panels;
