import React from 'react'
import styled from 'styled-components'

import { ToggleMenu, NavItems } from '../../atoms'

const NavbarStyled = styled.nav`
  @media only screen and (min-width: 64em) {
    display: flex;
    padding: 25px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`

interface NavBarProps {
  children: React.ReactNode
}

export const Navbar = ({ children }: NavBarProps) => {
  const [toggleMenu, handleToggleMenu] = React.useState(false)
  return (
    <NavbarStyled>
      <ToggleMenu onClick={() => handleToggleMenu(!toggleMenu)} />
      <NavItems active={toggleMenu}>{children}</NavItems>
    </NavbarStyled>
  )
}
