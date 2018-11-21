import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Button, Typography, FullContainer } from 'atoms'

const DiscoverUsImage = styled.img`
  object-fit: contain;
  margin: 75px auto 0 auto;
  display: block;
  width: 100%;
  max-width: 468px;
`

const DiscoverUsContainer = styled(Grid)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
`

const DiscoverUs = () => (
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

export default DiscoverUs
