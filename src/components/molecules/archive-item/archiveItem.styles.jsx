import styled from "styled-components"
import { device } from "../../particles/mediaQueries"

export const StyledArchiveItem = styled.div`
  width: 100%;

  @media ${device.xs} {
    display: flex;
  }

  &:active,
  &:focus,
  &:focus-within,
  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  &:focus,
  &:focus-within {
    outline: 2px dotted ${props => props.theme.primary};
    outline-offset: 8px;

    * {
      outline: none;
    }
  }

  > a {
    display: flex;
    flex-direction: column;
  }

  footer {
    margin-top: auto;
  }

  img {
    transform: scale(1);
    transition: 1s transform ease;
  }

  p:first-of-type {
    margin-top: 0;
  }

  p:last-of-type {
    margin-bottom: 16px;
  }

  .archive-item__image {
    overflow: hidden;
  }

  .archive-item__price {
    margin-bottom: 16px;
  }
`

export default StyledArchiveItem
