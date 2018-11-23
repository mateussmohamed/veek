import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ToggleMenu, NavItems } from 'atoms'

const NavbarStyled = styled.nav`
  @media only screen and (min-width: 64em) {
    display: flex;
    padding: 25px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
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

    return (
      <NavbarStyled>
        <ToggleMenu onClick={this.handleToggle} />
        <NavItems className={this.state.toggleMenu ? 'active' : ''}>
          {children}
        </NavItems>
      </NavbarStyled>
    )
  }
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Navbar
