import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'atoms'

const NavbarStyled = styled.nav`
  @media only screen and (min-width: 64em) {
    display: flex;
    padding: 25px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`

const NavItems = styled.div`
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

const ReponsiveItems = styled.div`
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

  &.active {
    transform: translate3d(0px, 0px, 0px);
  }

  a {
    color: #fff;
  }

  @media only screen and (min-width: 64em) {
    display: none;
  }
`

const ToggleMenu = styled.a`
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

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleMenu: false,
    }
  }

  handleToggle = () => this.setState({ toggleMenu: !this.state.toggleMenu })

  render() {
    const { children } = this.props
    const items = React.Children.map(children, child => child)

    return (
      <NavbarStyled>
        <ToggleMenu onClick={this.handleToggle}>
          <Icon name="menu" color="#eb5b49" />
        </ToggleMenu>
        <NavItems>{items}</NavItems>
        <ReponsiveItems className={this.state.toggleMenu ? 'active' : ''}>
          {items}
        </ReponsiveItems>
      </NavbarStyled>
    )
  }
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Navbar
