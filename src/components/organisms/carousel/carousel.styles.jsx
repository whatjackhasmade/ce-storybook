import styled from "styled-components"
import { device } from "../../particles/mediaQueries"

export const StyledCarousel = styled.section`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 64px 30px;

  @media ${device.md} {
    padding: 96px 30px;
  }

  .carousel__contents {
    margin: 0 auto;
    max-width: ${props => props.theme.gridMax};
  }
`

export default StyledCarousel
