import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { isInternal } from "../../helpers";

import StyledCTA, { StyledCTAWrapper } from "./cta.styles";

import IconArrowRight from "../../../assets/images/icons/arrow-right.svg";

const CTA = props => {
	const { children, href, target } = props;

	if (!href) return null;

	if (!isInternal(href)) {
		return (
			<StyledCTA className="cta" {...props}>
				{children} <IconArrowRight />
			</StyledCTA>
		);
	}

	return (
		<StyledCTAWrapper className="cta-wrapper">
			<Link {...props} className="cta" to={href}>
				{children} <IconArrowRight />
			</Link>
		</StyledCTAWrapper>
	);
};

// Expected prop values
CTA.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	target: PropTypes.string
};

// Default prop values
CTA.defaultProps = {
	children: "CTA text"
};

export default CTA;
