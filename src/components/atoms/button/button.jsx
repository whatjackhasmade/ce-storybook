import React from "react";
import PropTypes from "prop-types";

import StyledButton, { StyledLinkButton } from "./button.styles.jsx";

import IconPlus from "../../../assets/images/icons/plus.svg";
import IconBag from "../../../assets/images/icons/shopping-bag.svg";
import IconCart from "../../../assets/images/icons/shopping-cart.svg";
import IconUser from "../../../assets/images/icons/user.svg";
import IconX from "../../../assets/images/icons/x.svg";

// Assign SVGs to object with named keys
const Icons = {
	bag: IconBag,
	cart: IconCart,
	plus: IconPlus,
	times: IconX,
	user: IconUser
};

const Button = props => {
	const { background, children, href, icon, onClick, variant } = props;

	if (!href)
		return (
			<StyledButton className="button" {...props}>
				{icon && <ButtonIcon icon={icon} />}
				{children}
			</StyledButton>
		);
	return (
		<StyledLinkButton className="button" {...props}>
			{icon && <ButtonIcon icon={icon} />}
			{children}
		</StyledLinkButton>
	);
};

// Expected prop values
Button.propTypes = {
	background: PropTypes.string,
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	icon: PropTypes.string,
	onClick: PropTypes.func,
	variant: PropTypes.string
};

// Default prop values
Button.defaultProps = {
	children: "Button text",
	variant: "primary"
};

const ButtonIcon = ({ icon }) => {
	// If icon name value doesn't match Icons object keys then return null
	if (Icons[icon] === undefined) return null;
	// If icon found, return the icon in a span element
	const Icon = Icons[icon];
	return (
		<span className="button__icon">
			<Icon />
		</span>
	);
};

// Button Icon component always expects on prop value for icon name
ButtonIcon.propTypes = {
	icon: PropTypes.string.isRequired
};

export default Button;
