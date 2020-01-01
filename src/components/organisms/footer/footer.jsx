import React from "react"
import { arrayOf, shape, string } from "prop-types"

import StyledFooter from "./footer.styles"

import IconFacebook from "../../../assets/images/icons/brands/facebook.svg"
import IconInstagram from "../../../assets/images/icons/brands/instagram.svg"
import IconLinkedIn from "../../../assets/images/icons/brands/linkedin.svg"
import IconTwitter from "../../../assets/images/icons/brands/twitter.svg"

import FooterNewsletter from "../../molecules/footer-newsletter/footerNewsletter"
import Navigation from "../../molecules/navigation/navigation"

const Footer = ({ navigation }) => (
  <StyledFooter>
    <div className="footer__contents">
      <div className="footer__wrapper">
        {navigation &&
          navigation.length &&
          navigation.map(({ items, title }, i) => (
            <div
              className="footer__navigation"
              key={title ? `footer-nav-${title}` : `footer-nav-${i}`}
            >
              {title && <h4 className="footer__heading">{title}</h4>}
              {items && items.length && <Navigation items={items} />}
            </div>
          ))}
      </div>

      <div className="footer__newsletter">
        <h4 className="footer__heading">Join our newsletter</h4>
        <p>We will send you updates on new products and discounts.</p>
        <FooterNewsletter />
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
        <p>Copyright &copy; Celtic Elements {new Date().getFullYear()}</p>
        <a
          href="https://whatjackhasmade.co.uk"
          rel="noopener noreferrer"
          target="_blank"
        >
          Website by Jack Pritchard
        </a>
      </nav>
    </div>
  </StyledFooter>
)

// Expected prop values
Footer.propTypes = {
  navigation: arrayOf(
    shape({
      items: arrayOf(
        shape({
          label: string,
          target: string,
          url: string,
        })
      ),
      title: string,
    })
  ),
}

export default Footer
