import styled from "styled-components"
import { hexToRGB, shadeColour } from "../../helpers.js"

export const StyledCartItem = styled.div`
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .product__actions {
    button {
      height: 100%;
      padding: 8px;

      background-color: ${props => props.theme.grey500};

      svg {
        width: 16px;

        stroke: ${props => props.theme.white};
      }
    }
  }

  .product__image {
    max-width: 80px;
  }

  .product__meta {
    display: flex;
    flex-direction: column;
    margin: 0 24px 0 12px;
  }

  .product__quantity {
    display: inline-block;
    min-width: 40px;
    padding: 8px;
    text-align: center;

    font-size: 24px;
    font-weight: bold;
  }
`

export default StyledCartItem
