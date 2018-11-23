import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Label, Input } from 'atoms'

const StyledField = styled.div`
  display: block;
  margin-bottom: 25px;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 8px 0 0 0;
`

const Field = props => {
  return (
    <StyledField {...props}>
      <Label>{props.label}</Label>
      <Input
        id={props.name}
        name={props.name}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
      {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
    </StyledField>
  )
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
}

export default Field
