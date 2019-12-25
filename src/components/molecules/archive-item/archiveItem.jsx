import React from "react";
import PropTypes from "prop-types";

import StyledArchiveItem from "./archiveItem.styles";

import Link from "../../atoms/link/link";

const { number, string } = PropTypes;

const ArchiveItem = ({ id, image, price, slug, title }) => (
	<StyledArchiveItem className="archive-item" key={id}>
		<Link href={`/${slug}`}>
			<img src={image} alt={title} />
			<h2 className="h4">{title}</h2>
		</Link>
	</StyledArchiveItem>
);

ArchiveItem.propTypes = {
	id: string,
	image: string,
	price: number.isRequired,
	slug: string.isRequired,
	title: string.isRequired
};

export default ArchiveItem;
