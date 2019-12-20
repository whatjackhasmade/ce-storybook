import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, href, onClick }) => {
	if (!href)
		return (
			<button className="button" onClick={onClick}>
				{children}
			</button>
		);
	return (
		<a className="button" href={href}>
			{children}
		</a>
	);
};

// Expected prop values
Button.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func
};

// Default prop values
Button.defaultProps = {
	children: "Button text"
};

export default Button;
