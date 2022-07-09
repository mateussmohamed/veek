import React from 'react'
import styled from 'styled-components'

const StyledLinkList = styled.ul<{ direction: string }>`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  @media only screen and (min-width: 0em) {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
  }

  @media only screen and (min-width: 48em) {
    flex-direction: column;
  }

  @media only screen and (min-width: 64em) {
    flex-direction: ${props => props.direction};
  }

  li {
    ${props =>
      props.direction === 'row' ? 'margin-right: 16px' : 'margin-right: 0'};
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0;
      margin-right: 0;
    }

    @media only screen and (min-width: 0em) {
      flex-basis: 33.333333333333%;
      text-align: center;
    }

    @media only screen and (min-width: 64em) {
      flex-basis: auto;
      text-align: left;
    }
  }
`

interface LinkListProps {
  children: React.ReactNode
  direction?: string
}

export const LinkList = ({ children, direction = 'column' }: LinkListProps) => (
  <StyledLinkList direction={direction}>
    {React.Children.map(children, child => (
      <li>{child}</li>
    ))}
  </StyledLinkList>
)
