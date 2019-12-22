import styled from "styled-components"

export const StyledNavigation = styled.nav`
  display: flex;
  padding: 6px 16px;

  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;

  color: ${props => props.theme.black};

  a {
    display: inline-block;

    color: inherit;
    text-decoration: none;

    &:after {
      bottom: -2px;
      content: "";
      display: block;
      height: 2px;
      left: 0;
      width: 100%;

      background-color: ${props => props.theme.black};
      transform: scaleX(0);
      transform-origin: right center;
      transition: 0.4s transform ease;
    }

    &[aria-current="page"],
    &:active,
    &:focus,
    &:hover {
      &:after {
        transform: scaleX(1);
        transform-origin: left center;
      }
    }
  }

  a + a {
    margin-left: 32px;
  }
`

export default StyledNavigation
