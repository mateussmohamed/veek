import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const baseStyle = css`
  box-shadow: 0 4px 20px -2px rgba(40, 53, 131, 0.34);
  border-radius: 65px;
  min-width: 240px;
  color: #ffffff;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 6px 10px;
  text-transform: uppercase;
`

const primaryStyle = css`
  background-color: ${props => props.theme.colors.primary};
`

const secondaryStyle = css`
  background-color: ${props => props.theme.colors.secondary};
`

const StyledButton = styled.button`
  ${baseStyle}
  ${props => (props.primary ? primaryStyle : '')}
  ${props => (props.secondary ? secondaryStyle : '')}
`

const Button = props => <StyledButton {...props} />

Button.defaultProps = {
  primary: true,
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
}

export default Button
