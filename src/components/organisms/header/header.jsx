import React, { useState } from "react";
import PropTypes from "prop-types";
const { arrayOf, shape, string } = PropTypes;

import StyledHeader from "./header.styles.jsx";

import BrandLogo from "../../../assets/images/brand/logo.png";

import Link from "../../atoms/link/link";

import Navigation from "../../molecules/navigation/navigation";

const Header = ({ navigation }) => {
	const [isOpen, setOpen] = useState(false);

	const toggleNavigation = e => {
		e.preventDefault();
		setOpen(!isOpen);
	};

	return (
		<StyledHeader className={isOpen ? `header--open` : `header--closed`}>
			<button onClick={toggleNavigation} />
			{navigation &&
				navigation.length &&
				navigation.map(({ items }) => <Navigation items={items} />)}
			<Link href="/">
				<img
					alt="Celtic Elements Logo"
					className="header__logo"
					src={BrandLogo}
				/>
			</Link>
		</StyledHeader>
	);
};

// Expected prop values
Header.propTypes = {
	navigation: arrayOf(
		shape({
			items: arrayOf(
				shape({
					label: string,
					target: string,
					url: string
				})
			)
		})
	)
};

export default Header;