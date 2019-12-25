import styled from "styled-components"
import { device } from "../../particles/mediaQueries"

export const StyledArchive = styled.section`
  padding: 30px 0;
  width: 100%;

  .archive__contents {
    margin: 0 auto;
    max-width: ${props => props.theme.gridMax};

    @media ${device.xs} {
      display: grid;
      grid-gap: 32px;
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.md} {
      grid-gap: 40px;
      grid-row-gap: 48px;
      grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.lg} {
      grid-gap: 48px;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default StyledArchive
