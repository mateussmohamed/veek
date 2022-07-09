import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a<{ color: string }>`
  color: ${props => props.color};
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

export const Link = props => (
  <StyledLink color="#FFF" {...props}>
    {props.children}
  </StyledLink>
)
