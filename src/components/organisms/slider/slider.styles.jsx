import styled from "styled-components"
import { device } from "../../particles/mediaQueries"
import buttonReset from "../../atoms/button/button.reset"

export const StyledSlider = styled.section`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;

  button {
    ${buttonReset}
  }

  .slick-slide {
    align-items: center;
    display: flex;
    height: auto;
    justify-content: center;

    > div {
      height: 100%;
    }

    img,
    picture {
      transform: scale(1);
    }
  }

  .slick-track {
    display: flex;

    cursor: grab;
  }

  .slick-active {
    img,
    picture {
      animation-name: zoomIn;
      animation-delay: 1s;
      animation-duration: 8s;
      animation-direction: forwards;
      animation-fill-mode: forwards;
    }
  }

  .slick-slide {
    position: relative;
    width: 100%;

    background-color: ${props => props.theme.grey700};
    color: inherit;

    img,
    picture {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;

      object-fit: cover;
    }
  }

  .slider {
    width: 100%;
  }

  .slider__arrows {
    button {
      &:active,
      &:focus,
      &:hover,
      &.active {
        svg {
          stroke: ${props => props.theme.grey200};
        }
      }

      &:focus {
        outline: 1px dotted ${props => props.theme.white};
        outline-offset: 4px;
      }

      &:focus:not(:focus-visible) {
        outline: none;
      }

      + button {
        margin-left: 8px;

        transform: rotate(180deg);
      }
    }

    svg {
      display: block;
      height: 24px;

      stroke: ${props => props.theme.white};
      transition: 0.2s stroke ease;
    }
  }

  .slider__controls {
    padding: 56px 40px;

    background-color: ${props => props.theme.black};
  }

  .slider__footer {
    @media ${device.md} {
      display: flex;
    }
  }

  .slider__options {
    display: none;
    width: 100%;

    @media ${device.md} {
      display: flex;
    }
  }

  .slider__option {
    position: relative;
    width: 100%;
    height: 100%;

    img,
    picture {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 2;

      object-fit: cover;
      opacity: 1;
    }

    &:before {
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 3;

      background-color: ${props => props.theme.primary};
      opacity: 0;
      pointer-events: none;
      transition: 0.2s opacity ease;
    }

    &:focus {
      img {
        outline: 1px dotted ${props => props.theme.black};
      }

      &:before {
        opacity: 0.3;
      }
    }
  }

  .slider__option--active {
    &:before {
      opacity: 0.3;
    }
  }

  .slider__pagination {
    display: block;

    @media ${device.md} {
      min-width: 200px;
    }

    button {
      border-radius: 12px;
      height: 2px;
      min-height: 0px;
      padding: 0;
      width: 24px;

      background-color: ${props => props.theme.grey600};
      transition: 0.2s background-color ease;

      + button {
        margin-left: 8px;
      }

      &:active,
      &:focus,
      &:hover,
      &.active {
        background-color: ${props => props.theme.white};
      }

      &:focus {
        outline: 1px dotted ${props => props.theme.white};
        outline-offset: 4px;
      }

      &:focus:not(:focus-visible) {
        outline: none;
      }
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  }
`

export const StyledSliderItem = styled.div`
  color: ${props => (props.light ? props.theme.white : props.theme.black)};

  h2 {
    margin: 0;

    color: inherit;
    font-size: 48px;
    letter-spacing: -0.05em;
    line-height: 110%;

    @media ${device.md} {
      font-size: 72px;
    }
  }

  h2 + span {
    margin-top: 32px;
  }

  p {
    color: inherit;
    font-size: 18px;
    letter-spacing: -0.05em;
    line-height: 140%;
  }

  .slider__item__content {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 400px;
    margin: 0 auto;
    padding: 64px 30px;
    position: relative;
    z-index: 2;

    > * {
      max-width: 540px;
    }

    p {
      margin: 16px 0;
    }

    p:first-of-type {
      margin-top: 24px;
    }

    p:last-of-type {
      margin-bottom: 24px;
    }

    @media ${device.md} {
      max-width: 80%;
      min-height: 80vh;
      padding: 0;
    }
  }
`

export default StyledSlider
