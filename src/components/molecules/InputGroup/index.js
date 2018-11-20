import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Label, Input } from 'atoms'

const StyledInputGroup = styled.div`
  display: block;
  margin-bottom: 25px;
`

const InputGroup = props => {
  return (
    <StyledInputGroup {...props}>
      <Label>{props.label}</Label>
      <Input
        id={props.name}
        name={props.name}
        type={props.type}
        multiline={props.multiline}
        onChange={props.onChange}
      />
    </StyledInputGroup>
  )
}

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  multiline: PropTypes.bool,
  onChange: PropTypes.onChange,
}

export default InputGroup
