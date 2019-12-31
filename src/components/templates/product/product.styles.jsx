import styled from "styled-components"

export const StyledProduct = styled.div`
  width: 100%;

  h1 {
    margin-top: 0;

    color: ${props => props.theme.grey900};
    font-size: 48px;
    letter-spacing: -0.05em;
    line-height: 110%;
  }

  .product__description {
    margin: 32px 0;

    p:first-of-type {
      margin-top: 0;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  .product__header {
    align-items: center;
    display: flex;
    grid-column: 1 / 7;
    justify-content: center;
    padding: 64px;

    a {
      color: ${props => props.theme.black};
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 0.05em;
    }

    a + a {
      &::before {
        content: "//";
        display: inline-block;
        margin: 0 8px;
      }
    }

    nav {
      margin-bottom: 8px;
    }
  }

  .product__header__content {
    max-width: 560px;
  }

  .product__image {
    grid-column: 7 / 13;
    margin-right: -30px;
    height: 100%;
    min-height: 500px;
    position: relative;
    width: 100%;

    img {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;

      object-fit: cover;
    }
  }

  .product__intro {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(12, 1fr);
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
  }
`

export default StyledProduct
