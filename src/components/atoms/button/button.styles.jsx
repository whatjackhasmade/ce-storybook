import styled from "styled-components";

const buttonBackground = props => {
	// Fallback value if we can't get access to props
	if (!props || !props.theme || !props.theme.primary) return "#00FFFF";
	// If no variant is specified, return the primary colour in our theme
	if (!props.variant) return props.theme.primary;

	// Dynamically determine the background colour based on props
	let colour;
	switch (props.variant) {
		case "primary":
			colour = props.theme.primary;
			break;
		case "secondary":
			colour = props.theme.secondary;
			break;
		case "tertiary":
			colour = props.theme.tertiary;
			break;
		default:
			colour = props.theme.primary;
			break;
	}

	return colour;
};

export const StyledButton = styled.button`
	display: inline-flex;
	padding: 6px 10px;

	background-color: ${props => buttonBackground(props)};
	color: white;
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })`
	text-decoration: none;
`;

export default StyledButton;
