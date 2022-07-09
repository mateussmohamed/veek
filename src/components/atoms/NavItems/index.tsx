import React, { Fragment } from 'react'
import styled from 'styled-components'

const StyledNavItems = styled.div`
  @media only screen and (min-width: 0em) {
    a,
    button {
      display: none;
    }

    .logo {
      display: block;
      text-align: center;
    }
  }
  @media only screen and (min-width: 64em) {
    width: 630px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    a,
    button {
      display: block;
    }
  }
`

interface StyledReponsiveItemsProps {
  active?: boolean
}

const StyledReponsiveItems = styled.div<StyledReponsiveItemsProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 260px;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  padding: 50px 0;
  transition: all 0.5s ease 0s;
  transform: translate3d(-100%, 0px, 0px);

  ${props => props.active && 'transform: translate3d(0px, 0px, 0px);'}

  a {
    color: #fff;
  }

  @media only screen and (min-width: 64em) {
    display: none;
  }
`

interface NavItemsProps {
  children: React.ReactNode
  active?: boolean
}

export const NavItems = (props: NavItemsProps) => (
  <Fragment>
    <StyledNavItems {...props}>{props.children}</StyledNavItems>
    <StyledReponsiveItems {...props}>{props.children}</StyledReponsiveItems>
  </Fragment>
)
