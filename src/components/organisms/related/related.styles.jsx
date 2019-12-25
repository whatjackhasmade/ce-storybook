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

  .related__header {
    margin-bottom: 56px;

    text-align: center;
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

  .related__intro {
    margin: 0 auto 16px;
    max-width: 424px;

    color: ${props => props.theme.grey600};
    font-weight: bold;
    letter-spacing: -0.05em;
  }

  .related__subtitle {
    margin: 0 auto 32px;

    /* Secondary-500 */
    color: #54aac5;
    font-size: 14px;
    letter-spacing: 0.19em;
    line-height: 140%;
    text-transform: uppercase;
  }

  .related__title {
    margin: 0 auto 24px;

    color: ${props => props.theme.grey900};
    font-size: 36px;
    letter-spacing: -0.05em;
    line-height: 110%;
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
