import styled from "styled-components"

export const StyledCartItem = styled.div`
  display: flex;
  width: 100%;

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .product__actions {
    display: flex;
    margin-left: auto;

    button {
      height: 100%;
      padding: 8px;

      background-color: ${props => props.theme.grey500};

      svg {
        width: 16px;

        stroke: ${props => props.theme.white};
      }
    }

    input {
      max-width: 40px;
    }
  }

  .product__image {
    max-height: 64px;
    max-width: 64px;

    object-fit: cover;
  }

  .product__meta {
    display: flex;
    flex-direction: column;
    margin: 0 40px 0 24px;
  }

  .product__quantity {
    display: inline-block;
    min-width: 40px;
    padding: 8px;
    text-align: center;

    font-size: 24px;
    font-weight: bold;
  }

  .product__title {
    margin: 0;
    margin-bottom: 8px;

    /* Grey-900 */
    color: #0d0d0d;
    font-size: 20px;
    letter-spacing: -0.05em;
  }

  .product__subtotal {
    /* Grey-700 */
    color: #3d4852;
    font-size: 16px;
    letter-spacing: -0.05em;
  }

  & + .product {
    margin-top: 24px;
  }
`

export default StyledCartItem
