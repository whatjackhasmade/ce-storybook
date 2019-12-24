import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-grid-system";

import StyledPanels from "./panels.styles";

import IconArrowRight from "../../../assets/images/icons/arrow-right.svg";

const { arrayOf, shape, string } = PropTypes;

const Panels = ({ items }) => {
	if (!items || !items.length) return null;
	return (
		<StyledPanels className="panels">
			<Container>
				<Row>
					<Col offset={{ lg: 1 }} lg={10}>
						<div className="panels__contents">
							{items.map(({ content, link, title }) => (
								<div className="panels__panel">
									<h3>{title}</h3>
									<p>{content}</p>
									<a href={link.url} target={link.target}>
										{link.label} <IconArrowRight />
									</a>
								</div>
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</StyledPanels>
	);
};

// Expected prop values
Panels.propTypes = {
	items: arrayOf(
		shape({
			content: string
		})
	)
};

Panels.defaultProps = {
	items: []
};

export default Panels;
