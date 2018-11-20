import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const baseStyle = css`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d5d5d5;
`

const inputStyle = css`
  color: #000;
  font-size: 18px;
  font-weight: bold;

  :active,
  :focus {
    box-shadow: 1px 1px 10px 0px rgba(235, 91, 73, 0.5);
    outline: 0;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: 'color 9999s ease-out, background-color 9999s ease-out';
  }
`

const StyledTextField = styled.input`
  ${baseStyle};
  ${inputStyle};
`

class TextField extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  render() {
    return <StyledTextField {...this.props} ref={this.input} />
  }
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
