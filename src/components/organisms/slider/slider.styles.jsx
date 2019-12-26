import styled from "styled-components"
import { device } from "../../particles/mediaQueries"
import buttonReset from "../../atoms/button/button.reset"

export const StyledSlider = styled.section`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100%;

  button {
    ${buttonReset}
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
    padding: 40px;

    background-color: ${props => props.theme.black};
  }

  .slider__current,
  .slick-slide {
    min-height: 80vh;
    padding: 30px;
    position: relative;
    width: 100%;

    background-color: ${props => props.theme.grey700};
    color: ${props => props.theme.white};

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

  .slider__current__content,
  .slider__item__content {
    margin: 0 auto;
    max-width: 80%;
    position: relative;
    z-index: 2;
  }

  .slider__footer {
    display: flex;
  }

  .slider__options {
    display: flex;
    width: 100%;
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

      object-fit: cover;
      opacity: 1;
      transition: 0.2s opacity ease;
    }
  }

  .slider__option--active {
    opacity: 0.3;
  }

  .slider__pagination {
    display: block;
    min-width: 200px;

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
`

export default StyledSlider
