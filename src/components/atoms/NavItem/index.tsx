import styled from 'styled-components'

import { Link } from '../Link'

export const NavItem = styled(Link)`
  color: #000;
  :nth-of-type(n + 5) {
    order: 2;
  }

  @media only screen and (min-width: 0em) {
    font-size: 16px;
  }

  @media only screen and (min-width: 48em) {
    margin: 0;
    padding: 0;
    text-align: normal;
  }
`
