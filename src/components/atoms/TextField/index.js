import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTextField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  color: #000;
  font-size: 18px;
  font-weight: bold;

  :active,
  :focus {
    box-shadow: 1px 1px 10px 0px rgba(235, 91, 73, 0.5);
    outline: 0;
  }
`

const TextField = props => {
  const textField = React.createRef()

  return <StyledTextField {...props} ref={textField} />
}

TextField.defaultProps = {
  type: 'text',
  defaultValue: '',
}

TextField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default TextField
