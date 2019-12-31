import styled from "styled-components"
import { device } from "../../particles/mediaQueries"

export const StyleRow = styled.div`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  overflow: hidden;
  padding: 64px 30px;

  background-color: ${props => props.theme.grey100};

  @media ${device.md} {
    padding: 96px 0;
  }

  .row__contents {
    align-items: center;
    grid-column-gap: 30px;
    grid-row: 1fr;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto;
    max-width: 560px;
    width: 100%;

    @media ${device.md} {
      display: grid;
      max-width: ${props => props.theme.gridMax};
    }
  }

  .row__column {
    grid-column: ${props => (props.reverse ? `8 / 12` : `2 / 6`)};
    grid-row: 1;
  }

  .row__column + .row__column {
    grid-column: ${props => (props.reverse ? `2 / 7` : `7 / 12`)};
    grid-row: 1;
    margin-top: 48px;

    @media ${device.md} {
      margin-top: 0;
    }
  }

  .row__cta {
    margin-top: 24px;
  }

  .row__description {
    color: ${props => props.theme.grey600};
    font-size: 18px;
    letter-spacing: -0.05em;
    line-height: 140%;

    p:first-of-type {
      margin-top: 0;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  .row__image {
    height: 0;
    padding-top: 62.5%;
    position: relative;
    overflow: hidden;
    width: 100%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

    img {
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;

      object-fit: cover;
      opacity: ${props => (props.inView ? 1 : 0)};
      transform: ${props =>
        !props.inView ? `translateX(-50px)` : `translateX(0)`};
      transition: 0.6s opacity ease, 0.6s transform ease;
    }
  }

  .row__subtitle {
    margin: 0 0 32px;

    color: ${props => props.theme.secondary500};
    font-size: 14px;
    letter-spacing: 0.19em;
    line-height: 140%;
    text-transform: uppercase;
  }

  .row__text {
    opacity: ${props => (props.inView ? 1 : 0)};
    transform: ${props =>
      !props.inView ? `translateX(50px)` : `translateX(0)`};
    transition: 0.6s opacity ease, 0.6s transform ease;
  }

  .row__title {
    margin: 0 0 24px;

    color: ${props => props.theme.grey900};
    font-size: 36px;
    letter-spacing: -0.05em;
    line-height: 110%;
  }
`

export default StyleRow
