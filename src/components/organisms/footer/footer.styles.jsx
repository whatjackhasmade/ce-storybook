import styled from "styled-components"

export const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;

  background-color: ${props => props.theme.grey800};
  color: ${props => props.theme.white};

  a {
    color: ${props => props.theme.grey200};
    text-decoration: none;
    transition: 0.2s color ease;

    &:active,
    &:focus,
    &:hover {
      color: ${props => props.theme.white};

      &:after {
        display: none;
      }

      svg {
        fill: ${props => props.theme.grey200};
      }
    }
  }

  a[aria-current="page"] {
    color: ${props => props.theme.white};

    &:after {
      display: none;
    }
  }

  button {
    min-width: auto;
  }

  button[type="submit"] {
    margin-top: 0;
  }

  form {
    display: flex;
  }

  input[type="email"] {
    width: 100%;
  }

  svg {
    max-width: 24px;

    fill: ${props => props.theme.white};
    transition: 0.2s fill ease;
  }

  .footer__copyright {
    align-items: center;
    display: flex;
    margin: 48px auto 0;
    width: 100%;

    * {
      margin: 0;
    }

    a {
      padding: 16px;

      color: ${props => props.theme.white};
    }
  }

  .footer__navigation {
    a {
      font-weight: 400;
    }

    a + a {
      margin-left: 0;
      margin-top: 16px;
    }

    nav {
      align-items: flex-start;
      flex-direction: column;
      padding: 0;
    }
  }

  .footer__navigation + .footer__navigation {
    margin-left: 64px;
  }

  .footer__newsletter {
    margin-left: auto;
    max-width: 320px;
  }

  .footer__social {
    margin: 24px auto 16px;

    a + a {
      margin-left: 12px;
    }
  }

  .footer__wrapper {
    display: flex;
  }
`

export default StyledFooter
