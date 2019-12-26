import styled from "styled-components"

const headerColour = props => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.black) return "#131313"

  // If no variant is specified, return the white colour
  if (!props.variant) return props.theme.black

  // Dynamically determine the background colour based on props
  let colour
  switch (props.variant) {
    case "fixedLight":
      colour = props.theme.white
      break
    case "fixedDark":
      colour = props.theme.black
      break
    default:
      colour = props.theme.black
      break
  }

  return colour
}

const headerPosition = props => {
  // Fallback value if we can't get access to props
  if (!props || !props.variant) return "relative"

  // Dynamically determine the background colour based on props
  let position
  switch (props.variant) {
    case "fixedLight":
      position = "fixed"
      break
    case "fixedDark":
      position = "fixed"
      break
    default:
      position = "relative"
      break
  }

  return position
}

export const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  min-height: 124px;
  left: ${props => (props.variant ? `0` : undefined)};
  padding: ${props => (props.variant ? `30px` : `30px 0`)};
  position: ${props => headerPosition(props)};
  top: ${props => (props.variant ? `0` : undefined)};
  width: 100%;

  color: ${props => headerColour(props)};

  button {
    display: inline-flex;

    display: none;
  }

  img {
    left: 50%;
    height: 64px;
    position: absolute;
    top: 50%;

    transform: translate(-50%, -50%);
  }

  nav {
    padding: 0;
  }

  nav + nav {
    margin-left: auto;
  }

  svg {
    height: 24px;
    stroke: 1px solid ${props => props.theme.black};
  }
`

export default StyledHeader
