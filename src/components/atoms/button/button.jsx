import React from "react";
import PropTypes from "prop-types";

import StyledButton, { StyledLinkButton } from "./button.styles.jsx";

const Button = ({ children, href, onClick, variant }) => {
	if (!href)
		return (
			<StyledButton className="button" onClick={onClick} variant={variant}>
				{children}
			</StyledButton>
		);
	return (
		<StyledLinkButton className="button" variant={variant} href={href}>
			{children}
		</StyledLinkButton>
	);
};

// Expected prop values
Button.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
	variant: PropTypes.string
};

// Default prop values
Button.defaultProps = {
	children: "Button text",
	variant: "primary"
};

export default Button;
