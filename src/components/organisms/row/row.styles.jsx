import styled from "styled-components"
import { device } from "../../particles/mediaQueries"

export const StyleRow = styled.div`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100%;
  overflow: hidden;
  padding: 96px 0;

  background-color: ${props => props.theme.grey100};

  .row__contents {
    align-items: center;
    display: grid;
    grid-column-gap: 30px;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto;
    max-width: ${props => props.theme.gridMax};
    width: 100%;
  }

  .row__column {
    grid-column: 2 / 6;
  }

  .row__column + .row__column {
    grid-column: 7 / 12;
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

  .row__title {
    margin: 0 0 24px;

    color: ${props => props.theme.grey900};
    font-size: 36px;
    letter-spacing: -0.05em;
    line-height: 110%;
  }
`

export default StyleRow
