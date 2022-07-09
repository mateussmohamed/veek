import styled from 'styled-components'

import { Grid } from 'react-styled-flexboxgrid'

export const HeroContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  @media only screen and (min-width: 0em) {
    justify-content: space-evenly;
    padding-top: 150px;
    padding-bottom: 150px;
  }
  @media only screen and (min-width: 48em) {
    padding: 200px 0;
  }
`
