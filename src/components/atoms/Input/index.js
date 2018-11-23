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
  type: 'text',
}

Input.propTypes = {
  type: PropTypes.string,
}

export default Input
