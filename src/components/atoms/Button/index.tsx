import React from 'react'
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

interface ButtonProps {
  readonly children: React.ReactNode
  readonly primary?: boolean
  readonly secondary?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  ${baseStyle}
  ${props => props.primary && !props.secondary && primaryStyle}
  ${props => props.secondary && secondaryStyle}

  cursor: pointer;

  & :disabled {
    cursor: default;
    pointer-events: none;
    color: #f1f1f1;
    background-color: #999;
  }
`

export const Button = ({ primary = true, ...restProps }: ButtonProps) => {
  return <StyledButton primary {...restProps} />
}
