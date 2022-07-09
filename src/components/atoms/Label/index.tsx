import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  font-family: Lato, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  line-height: normal;
  display: block;
  margin-bottom: 10px;
`

export const Label = props => <StyledLabel {...props} />
