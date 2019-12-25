import React from "react";
import PropTypes from "prop-types";

import StyledFooter from "./footer.styles";

import IconFacebook from "../../../assets/images/icons/brands/facebook.svg";
import IconInstagram from "../../../assets/images/icons/brands/instagram.svg";
import IconLinkedIn from "../../../assets/images/icons/brands/linkedin.svg";
import IconTwitter from "../../../assets/images/icons/brands/twitter.svg";

import Button from "../../atoms/button/button";
import CTA from "../../atoms/cta/cta";

import Navigation from "../../molecules/navigation/navigation";

const { arrayOf, shape, string } = PropTypes;

const Footer = ({ navigation }) => {
	const handleSubmit = e => {
		e.preventDefault("Submitted");
	};

	return (
		<StyledFooter>
			<div className="footer__contents">
				<div className="footer__wrapper">
					{navigation &&
						navigation.length &&
						navigation.map(({ items, title }) => (
							<div className="footer__navigation">
								{title && <h4 className="footer__heading">{title}</h4>}
								{items && items.length && <Navigation items={items} />}
							</div>
						))}
				</div>

				<div className="footer__newsletter">
					<h4 className="footer__heading">Join our newsletter</h4>
					<p>We will send you updates on new products and discounts.</p>
					<form onSubmit={handleSubmit}>
						<input type="email" placeholder="Email Address..." />
						<button type="submit">
							<CTA>Send</CTA>
						</button>
					</form>
					<nav className="footer__social">
						<a href="https://google.com">
							<IconFacebook />
						</a>
						<a href="https://instagram.com">
							<IconInstagram />
						</a>
						<a href="https://linkedin.com">
							<IconLinkedIn />
						</a>
						<a href="https://twitter.com">
							<IconTwitter />
						</a>
					</nav>
				</div>

				<nav className="footer__copyright">
					<p>Copyright &copy; Celtic Elements 2020</p>
					<a href="https://whatjackhasmade.co.uk">Website by Jack Pritchard</a>
				</nav>
			</div>
		</StyledFooter>
	);
};

// Expected prop values
Footer.propTypes = {
	navigation: arrayOf(
		shape({
			items: arrayOf(
				shape({
					label: string,
					target: string,
					url: string
				})
			),
			title: string
		})
	)
};

export default Footer;
