import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Label, Input } from 'atoms'

const StyledField = styled.div`
  display: block;
  margin-bottom: 25px;
`

const Field = props => {
  return (
    <StyledField {...props}>
      <Label>{props.label}</Label>
      <Input
        id={props.name}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
      />
    </StyledField>
  )
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Field
