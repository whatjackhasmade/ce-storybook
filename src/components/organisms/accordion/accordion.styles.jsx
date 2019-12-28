import styled from "styled-components"
import { device } from "../../particles/mediaQueries"
import ButtonReset from "../../atoms/button/button.reset"

export const StyledAccordion = styled.section`
  border-radius: 8px;
  margin: 32px auto;
  max-width: ${props => props.theme.gridMax};
  width: 100%;

  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grey200};
  color: ${props => props.theme.grey800};

  .accordion__contents {
    display: ${props => (props.isOpen === true ? `block` : `none`)};
    margin-bottom: 30px;
    padding: 0 30px;

    border-top: 1px solid ${props => props.theme.offWhite};
  }

  .accordion__title {
    font-size: 20px;
    font-weight: 400;
  }

  .accordion__toggle {
    ${ButtonReset}

    align-items: center;
    display: flex;
    padding: 16px 30px;
    width: 100%;

    background-color: ${props => props.theme.white};

    &:focus {
      outline: 1px dotted ${props => props.theme.black};
    }

    &:focus,
    &:hover {
      background-color: ${props => props.theme.offWhite};

      svg {
        stroke: ${props => props.theme.grey500};
      }
    }

    svg {
      display: block;
      height: 24px;
      margin-left: auto;

      stroke: ${props => props.theme.grey400};
      transform: ${props =>
        props.isOpen === true ? `rotate(270deg);` : `rotate(180deg);`};
      transition: 0.2s stroke ease, 0.2s transform ease;
    }
  }
`

export default StyledAccordion
