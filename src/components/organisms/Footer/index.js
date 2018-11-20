import React from 'react'
import styled from 'styled-components'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Link, Icon } from 'atoms'
import { LinkList } from 'molecules'

const FooterStyled = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  padding: 50px 0;
`
const Logo = styled.a`
  width: 90px;
  height: 35px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-image: url('/assets/veek_logo.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media only screen and (min-width: 0em) {
    margin-bottom: 25px;
  }
  @media only screen and (min-width: 48em) {
    margin-bottom: 15px;
  }
`

const Footer = () => (
  <FooterStyled>
    <Grid style={{ padding: '0 1rem' }}>
      <Row between="xs" middle="sm">
        <Col xs={12} sm={12} md={2}>
          <Logo />
        </Col>
        <Col xs={6} sm={4} md={2}>
          <LinkList>
            <Link>Team</Link>
            <Link>About us</Link>
            <Link>Process</Link>
          </LinkList>
        </Col>
        <Col xs={6} sm={3} md={2}>
          <LinkList>
            <Link>Explication</Link>
            <Link>News</Link>
            <Link>Contact</Link>
          </LinkList>
        </Col>
        <Col xs={12} sm={5} md={4}>
          <LinkList direction="row">
            <Link>Privacy Police</Link>
            <Link>Legal Notice</Link>
            <Link>English</Link>
          </LinkList>
        </Col>
        <Col xs={12} sm={12} md={2}>
          <LinkList direction="row">
            <Link>
              <Icon name="facebook" />
            </Link>
            <Link>
              <Icon name="twitter" />
            </Link>
            <Link>
              <Icon name="instagram" />
            </Link>
            <Link>
              <Icon name="linkedin" />
            </Link>
          </LinkList>
        </Col>
      </Row>
    </Grid>
  </FooterStyled>
)

export default Footer
