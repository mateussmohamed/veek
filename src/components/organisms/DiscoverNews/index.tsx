import React from 'react'
import styled from 'styled-components'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Button } from '../../atoms'
import { Card } from '../../molecules'

const DiscoverNewsContainer = styled(Grid)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 50px;
`

export const DiscoverNews = () => (
  <DiscoverNewsContainer>
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
  </DiscoverNewsContainer>
)
