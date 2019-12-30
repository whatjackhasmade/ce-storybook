import styled from "styled-components"
import { hexToRGB, shadeColour } from "../../helpers.js"

export const StyledCart = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;

  background-color: ${props => `rgba(${hexToRGB(props.theme.grey800)}, 0.8)`};
  opacity: 0;

  animation-name: fadeIn;
  animation-duration: 0.2s;
  animation-direction: forwards;
  animation-fill-mode: forwards;

  h2 {
    margin: 0;

    font-size: 20px;
  }

  .cart__actions {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    padding-top: 24px;
  }

  .cart__aside {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding: 40px;

    background-color: ${props => props.theme.white};
    color: ${props => props.theme.grey800};
    opacity: 0;

    animation-name: cartSlide;
    animation-delay: 0.2s;
    animation-duration: 0.4s;
    animation-direction: forwards;
    animation-fill-mode: forwards;
  }

  .cart__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    padding: 24px 0;

    border-bottom: 1px solid ${props => props.theme.grey100};
    border-top: 1px solid ${props => props.theme.grey100};
  }

  .cart__product {
    display: flex;
  }

  .cart__return {
    margin-top: 16px;
  }

  .cart__total {
    margin-left: 24px;
    margin-top: 1px;
  }

  @keyframes cartSlide {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const StyledCartToggle = styled.nav`
  bottom: 32px;
  position: fixed;
  right: 32px;

  button {
    align-items: center;
    border-radius: 48px;
    display: flex;
    height: 48px;
    justify-content: center;
    width: 48px;

    background-color: ${props => props.theme.primary};

    &:active,
    &:focus,
    &:hover {
      background-color: ${props => shadeColour(props.theme.primary, 30)};
    }
  }

  svg {
    display: block;
    max-width: 32px;
    width: 100%;

    stroke: ${props => props.theme.white};
    transform: translateX(-2px);
  }
`

export default StyledCart
