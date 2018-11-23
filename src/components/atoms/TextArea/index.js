import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  resize: none;

  :active,
  :focus {
    box-shadow: 1px 1px 10px 0px rgba(235, 91, 73, 0.5);
    outline: 0;
  }
`

const TextArea = props => <StyledTextArea {...props} />

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default TextArea
