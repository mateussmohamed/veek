import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Button, Link, Logo } from 'atoms'

const HeaderStyled = styled.header`
  width: 100%;
  padding: 25px 0;

  @media only screen and (min-width: 48em) {
    position: absolute;
    top: 0;
    left: 0;
  }
`
const HeaderLogo = styled(Link)`
  @media only screen and (min-width: 0em) {
    order: 0;
    margin-bottom: 35px;
    flex-basis: 100%;
    text-align: center;
  }
  @media only screen and (min-width: 48em) {
    order: 1;
    margin: 0;
  }
`

const Navbar = styled.nav`
  display: flex;

  @media only screen and (min-width: 0em) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 48em) {
    flex-direction: row;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-evenly;
  }
`

const NavLink = styled(Link)`
  color: #000;
  :nth-of-type(n + 5) {
    order: 2;
  }

  @media only screen and (min-width: 0em) {
    font-size: 16px;
    margin-bottom: 25px;
    flex-basis: 50%;
    text-align: center;
  }

  @media only screen and (min-width: 48em) {
    margin: 0;
    padding: 0;
    text-align: normal;
  }
`
const ApplyButton = styled(Button)`
  min-width: 100px;
  order: 9;

  @media only screen and (min-width: 0em) {
    margin: 0 auto;
    display: block;
  }

  @media only screen and (min-width: 48em) {
    position: relative;
    margin: 15px auto;
  }

  @media only screen and (min-width: 75em) {
    position: absolute;
    top: 4px;
    right: -100px;
    margin: 0;
  }
`

const Header = () => (
  <HeaderStyled>
    <Grid>
      <Row>
        <Col xs={12} style={{ position: 'relative' }}>
          <Navbar>
            <HeaderLogo>
              <Logo color="#eb5b49" />
            </HeaderLogo>
            <NavLink>Team</NavLink>
            <NavLink>About us</NavLink>
            <NavLink>Process</NavLink>
            <NavLink>Explication</NavLink>
            <NavLink>New</NavLink>
            <NavLink>Contact</NavLink>
          </Navbar>
          <ApplyButton secondary>Apply</ApplyButton>
        </Col>
      </Row>
    </Grid>
  </HeaderStyled>
)

export default Header
