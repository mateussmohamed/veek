import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const baseStyle = css`
  min-width: 240px;
  border-radius: 65px;
  padding: 6px 10px;
  border: 0;
  outline: 0;
  color: #ffffff;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  box-shadow: 0 4px 15px -2px rgba(40, 53, 131, 0.4);

  :hover {
    box-shadow: 0 4px 22px -2px rgba(40, 53, 131, 0.7);
  }
`

const primaryStyle = css`
  background-color: ${props => props.theme.colors.primary};
`

const secondaryStyle = css`
  background-color: ${props => props.theme.colors.secondary};
`

const StyledButton = styled.button`
  ${baseStyle}
  ${props => props.primary && !props.seconsecondarydary && primaryStyle}
  ${props => props.secondary && secondaryStyle}

  cursor: pointer;

  & :disabled {
    cursor: default;
    pointer-events: none;
    color: #f1f1f1;
    background-color: #999;
  }

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
