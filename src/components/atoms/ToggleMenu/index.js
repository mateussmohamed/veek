import React from 'react'
import styled from 'styled-components'

import { Icon } from 'atoms'

const StyledToggleMenu = styled.a`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 28px;
  right: 15px;
  cursor: pointer;

  @media only screen and (min-width: 0em) {
    display: block;
  }

  @media only screen and (min-width: 64em) {
    display: none;
  }
`

const ToggleMenu = props => (
  <StyledToggleMenu {...props}>
    <Icon name="menu" color="#eb5b49" />
  </StyledToggleMenu>
)

export default ToggleMenu
