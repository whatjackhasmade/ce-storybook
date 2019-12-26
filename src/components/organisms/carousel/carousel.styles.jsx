import styled from "styled-components"
import { device } from "../../particles/mediaQueries"
import { shadeColour } from "../../helpers"

export const StyledCarousel = styled.section`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 64px 0;

  @media ${device.md} {
    padding: 96px 0;
  }

  .carousel__item {
    padding: 0 30px;
  }

  .carousel__item__description {
    margin: 12px 0 0;
  }

  .carousel__item__title {
    margin-bottom: 12px;
    margin-top: 12px;
  }

  .carousel__item__subtitle {
    margin-bottom: 8px;
    margin-top: 24px;

    font-size: 18px;
    font-weight: 400;
  }

  .carousel__slider {
    overflow: hidden;
  }

  .slick-dots {
    bottom: 0;
    margin-top: 64px;
    position: relative;

    button {
      border-radius: 50%;

      border: 2px solid #a0d0df;
      box-shadow: none;
      transition: 0.2s background-color ease;

      &::before {
        display: none;
      }

      &:active,
      &:focus,
      &:hover {
         {
          /* TODO: Replace with theme values */
        }
        background-color: ${shadeColour("#a0d0df", 30)};
      }
    }

    .slick-active {
      button {
        background-color: #54aac5;
        border-color: #54aac5;
      }
    }
  }

  .slick-slide {
    opacity: 0.4;
    transition: 0.4s opacity ease;
  }

  .slick-active {
    opacity: 1;
  }
`

export default StyledCarousel
