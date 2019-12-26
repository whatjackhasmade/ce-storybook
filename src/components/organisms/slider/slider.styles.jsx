import styled from "styled-components"
import { device } from "../../particles/mediaQueries"
import buttonReset from "../../atoms/button/button.reset"

export const StyledSlider = styled.section`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100%;

  .slider__controls {
    padding: 30px;

    background-color: ${props => props.theme.black};

    button {
      border-radius: 12px;
      height: 4px;
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
    }
  }

  .slider__current {
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

  .slider__current__content {
    margin: 0 auto;
    max-width: 80%;
    position: relative;
    z-index: 2;
  }

  .slider__footer {
    display: flex;

    nav {
      width: 100%;
      height: 100%;
    }
  }

  .slider__option {
    ${buttonReset}
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
    }
  }
`

export default StyledSlider
