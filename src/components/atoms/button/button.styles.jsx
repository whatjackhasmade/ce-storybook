import styled from "styled-components"
import buttonReset from "./button.reset"
import { shadeColour } from "../../helpers"

const buttonBackground = props => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.primary600) return "#4E2ECD"

  // If a background value is specified, use that instead of theme
  if (props.background) return props.background

  // If no variant is specified, return the primary colour in our theme
  if (!props.variant) return props.theme.primary600

  // Dynamically determine the background colour based on props
  let colour
  switch (props.variant) {
    case "primary":
      colour = props.theme.primary600
      break
    case "secondary":
      colour = props.theme.secondary
      break
    case "tertiary":
      colour = props.theme.offWhite
      break
    default:
      colour = props.theme.primary600
      break
  }

  return colour
}

const buttonColour = props => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.primary) return "white"

  // If no variant is specified, return the white colour
  if (!props.variant) return "white"

  // Dynamically determine the background colour based on props
  let colour
  switch (props.variant) {
    case "primary":
      colour = props.theme.white
      break
    case "secondary":
      colour = props.theme.white
      break
    case "tertiary":
      colour = props.theme.black
      break
    default:
      colour = props.theme.white
      break
  }

  return colour
}

export const StyledButton = styled.button`
  ${buttonReset}

  align-items: center;
  display: inline-flex;
  justify-content: center;
  min-width: 208px;
  padding: 16px 24px;

  background-color: ${props => buttonBackground(props)};
  color: ${props => buttonColour(props)};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  text-align: center;
  text-transform: capitalize;
  transition: 0.2s background-color ease;

  &:active,
  &:focus,
  &:hover {
    background-color: ${props => shadeColour(buttonBackground(props), 30)};
  }

  svg {
    display: block;
    height: 20px;
    stroke-width: 3px;
  }

  .button__icon {
    display: block;
    margin-left: -4px;
    margin-right: 4px;
  }
`

export const StyledLinkWrapper = styled(StyledButton).attrs({ as: "span" })`
  padding: 0;

  a {
    display: block;
    padding: 16px 24px;
    width: 100%;

    color: ${props => buttonColour(props)} !important;
    font-weight: 700 !important;
    text-decoration: none;
  }
`

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })`
  text-decoration: none;
`

export default StyledButton
