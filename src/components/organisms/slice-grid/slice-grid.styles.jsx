import styled from "styled-components"
import { device } from "../../particles/mediaQueries"

export const StyledSliceGrid = styled.div`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  overflow: hidden;
  padding: 64px 30px;

  background-color: ${props => props.theme.grey100};

  @media ${device.md} {
    padding: 96px 0;
  }

  .slice-grid__contents {
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

  .slice-grid__column {
    grid-column: ${props => (props.reverse ? `8 / 12` : `2 / 6`)};
    grid-row: 1;
  }

  .slice-grid__column + .slice-grid__column {
    grid-column: ${props => (props.reverse ? `2 / 7` : `7 / 12`)};
    grid-row: 1;
    margin-top: 48px;

    @media ${device.md} {
      margin-top: 0;
    }
  }

  .slice-grid__text {
    color: ${props => props.theme.grey600};
    font-size: 18px;
    letter-spacing: -0.05em;
    line-height: 140%;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 24px;

      color: ${props => props.theme.grey900};
      font-size: 36px;
      letter-spacing: -0.05em;
      line-height: 110%;
    }

    p:first-of-type {
      margin-top: 0;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  .slice-grid__text {
    opacity: 0;
    transform: ${props =>
      props.reverse ? `translateX(-50px)` : `translateX(50px)`};
    transition: 0.6s opacity ease, 0.6s transform ease;
  }

  .slice-grid__image {
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

  .slice-grid__image + .slice-grid__image {
    margin-top: 32px;

    @media ${device.xs} {
      margin-top: 0;
    }
  }

  .slice-grid__images {
    @media ${device.xs} {
      align-items: center;
      display: grid;
      grid-gap: 32px;
      grid-template-columns: repeat(2, 1fr);

      .slice-grid__image {
        padding-top: 100%;

        &:first-of-type {
          grid-row: ${props => (props.imageCount === 3 ? `1 / 3` : `1`)};
          padding-top: ${props =>
            props.imageCount === 3 ? `calc(200% + 32px)` : `100%`};
        }
      }
    }
  }

  &.slice-grid--inview {
    .slice-grid__text {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export default StyledSliceGrid
