import React from 'react'
import styled from 'styled-components'

import { Button, Logo, Link, NavItem } from '../../atoms'
import { Navbar } from '../../molecules'

const HeaderStyled = styled.header`
  @media only screen and (min-width: 0em) {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 25px 0;
  }
`

const HeaderLogo = styled(Link)`
  @media only screen and (min-width: 64em) {
    order: 1;
    margin: 0;
  }
`

const ApplyButton = styled(Button)`
  min-width: 135px;
  order: 9;

  @media only screen and (min-width: 64em) {
    position: absolute;
    right: -150px;
  }
  @media only screen and (min-width: 75em) {
    right: -230px;
  }
`

export const Header = () => (
  <HeaderStyled>
    <Navbar>
      <HeaderLogo>
        <Logo color="#eb5b49" />
      </HeaderLogo>
      <NavItem>Team</NavItem>
      <NavItem>About us</NavItem>
      <NavItem>Process</NavItem>
      <NavItem>Explication</NavItem>
      <NavItem>New</NavItem>
      <NavItem>Contact</NavItem>
      <ApplyButton secondary>Apply</ApplyButton>
    </Navbar>
  </HeaderStyled>
)
