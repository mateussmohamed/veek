import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Button, Typography, FullContainer } from '../../atoms'

const DiscoverUsImage = styled.img`
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
  max-width: 468px;

  @media only screen and (min-width: 0em) {
    margin-top: 35px;
  }

  @media only screen and (min-width: 48em) {
    margin-top: 45px;
  }

  @media only screen and (min-width: 64em) {
    margin-top: 65px;
  }
`

const DiscoverUsContainer = styled(Grid)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
`

export const DiscoverUs = () => (
  <FullContainer>
    <DiscoverUsContainer>
      <Row>
        <Col xs={12}>
          <DiscoverUsImage src="/assets/discover_us.png" />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Typography variant="body" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tincidunt convallis dignissim. Integer convallis diam tortor, a
            blandit quam dignissim sed. Maecenas semper lobortis enim quis
            tincidunt. Donec quis ultrices orci. Suspendisse rutrum sapien ac
            lobortis suscipit. Nullam pellentesque fringilla est, in efficitur
            nisl porta eu. Donec elementum condimentum sem non bibendum.n
            pellentesque dolor sit amet nisi lacinia euismod. Mauris elementum
            turpis sem, ut laoreet purus porta ut. Suspendisse posuere purus id
            nunc eleifend, id condimentum nulla tempus. Donec tortor sem,
            efficitur a laoreet ut, lacinia ac ante
          </Typography>
        </Col>
      </Row>
      <Row center="xs">
        <Col>
          <Button>Discover Us</Button>
        </Col>
      </Row>
    </DiscoverUsContainer>
  </FullContainer>
)
