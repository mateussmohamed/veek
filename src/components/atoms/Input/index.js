import React from 'react'
import PropTypes from 'prop-types'

import File from '../File'
import TextField from '../TextField'
import TextArea from '../TextArea'

const getComponent = props => ({
  textarea: <TextArea {...props} />,
  text: <TextField {...props} />,
  file: <File {...props} />,
})

const Input = props => getComponent(props)[props.type]

Input.defaultProps = {
  multiline: false,
  type: 'text',
  defaultValue: '',
}

Input.propTypes = {
  multiline: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input
