import styled from "styled-components"
import { device } from "../../particles/mediaQueries"

export const StyledRelated = styled.section`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 64px 30px;

  @media ${device.md} {
    padding: 96px 30px;
  }

  .related__contents {
    margin: 0 auto;
    max-width: ${props => props.theme.gridMax};
  }

  .related__items {
    @media ${device.xs} {
      display: grid;
      grid-gap: 32px;
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.md} {
      grid-gap: 40px;
      grid-row-gap: 48px;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .related-item {
    &:active,
    &:focus,
    &:focus-within,
    &:hover {
      img {
        transform: scale(1.1);
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;

      color: ${props => props.theme.grey900};
      letter-spacing: -0.05em;
    }

    p {
      color: ${props => props.theme.grey800};
      font-size: 16px;
      letter-spacing: -0.05em;
      line-height: 140%;
    }
  }

  .related-item__image {
    display: block;
    margin-bottom: 16px;
    overflow: hidden;

    img {
      display: block;

      transform: scale(1);
      transition: 1s transform ease;
    }
  }

  .related-item__subtitle {
    margin-bottom: 12px;

    color: ${props => props.theme.black};
    font-size: 16px;
    font-weight: 300;
  }

  .related-item__title {
    margin-bottom: 18px;

    font-size: 24px;
  }
`

export default StyledRelated
