import React from 'react'
import styled from 'styled-components'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Icon, Link, Logo } from 'atoms'
import { LinkList } from 'molecules'

const FooterStyled = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  width: 100%;
  padding: 25px 0;

  @media only screen and (min-width: 0em) {
    margin-top: 100px;
  }
  @media only screen and (min-width: 48em) {
    margin-top: 140px;
  }
  @media only screen and (min-width: 64em) {
    margin-top: 200px;
  }
`
const FooterLogo = styled(Link)`
  @media only screen and (min-width: 0em) {
    text-align: center;
    display: block;
    margin-bottom: 25px;
  }
  @media only screen and (min-width: 48em) {
    margin-bottom: 15px;
  }
`

const SocialLinks = styled(LinkList)`
  flex-direction: row !important;
  li {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const Footer = () => (
  <FooterStyled>
    <Grid style={{ padding: '0 1rem' }}>
      <Row between="xs" middle="sm">
        <Col xs={12} sm={12} md={2}>
          <FooterLogo>
            <Logo color="#fff" />
          </FooterLogo>
        </Col>
        <Col xs={12} sm={4} md={2}>
          <LinkList>
            <Link>Team</Link>
            <Link>About us</Link>
            <Link>Process</Link>
          </LinkList>
        </Col>
        <Col xs={12} sm={4} md={2}>
          <LinkList>
            <Link>Explication</Link>
            <Link>News</Link>
            <Link>Contact</Link>
          </LinkList>
        </Col>
        <Col xs={12} sm={4} md={4}>
          <LinkList direction="row">
            <Link>Privacy Police</Link>
            <Link>Legal Notice</Link>
            <Link>English</Link>
          </LinkList>
        </Col>
        <Col xs={12} sm={12} md={2}>
          <SocialLinks direction="row">
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
          </SocialLinks>
        </Col>
      </Row>
    </Grid>
  </FooterStyled>
)

export default Footer
