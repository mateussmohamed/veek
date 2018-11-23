import React from 'react'
import styled from 'styled-components'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Typography } from 'atoms'
import { FormApply } from 'organisms'

const ApplyContainer = styled.div`
  width: 100%;
`

const Apply = () => (
  <Grid>
    <ApplyContainer>
      <Row style={{ marginBottom: 50 }}>
        <Col xs={12}>
          <Typography variant="title2">Apply</Typography>
          <Typography variant="subtitle2">
            Thought experiments (Gedankenexperimenten) are “facts” in the sense{' '}
          </Typography>
        </Col>
      </Row>
      <FormApply />
    </ApplyContainer>
  </Grid>
)

export default Apply
