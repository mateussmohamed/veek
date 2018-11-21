import styled from 'styled-components'

import { Grid } from 'react-styled-flexboxgrid'

const HeroContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  @media only screen and (min-width: 0em) {
    padding: 20px 0;
  }
  @media only screen and (min-width: 48em) {
    padding: 200px 0;
  }
`

export default HeroContent
