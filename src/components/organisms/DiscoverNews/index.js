import React from 'react'
import styled from 'styled-components'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Button } from 'atoms'
import { Card } from 'molecules'

const Container = styled(Grid)`
  margin: 250px auto;
`

const DiscoverNews = () => (
  <Container>
    <Row>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card />
      </Col>
    </Row>
    <Row center="xs">
      <Col>
        <Button>Discover News</Button>
      </Col>
    </Row>
  </Container>
)

export default DiscoverNews
