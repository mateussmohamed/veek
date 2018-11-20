import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLinkList = styled.ul`
  display: flex;
  flex-direction: ${props => props.direction};
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: space-evenly;

  @media only screen and (min-width: 0em) {
    margin: 16px 0;
  }

  li {
    ${props =>
      props.direction === 'row' ? 'margin-right: 16px' : 'margin-right: 0'};
    margin-bottom: 8px;
    :last-child {
      margin-bottom: 0;
      margin-right: 0;
    }
  }
`

const LinkList = props => (
  <StyledLinkList {...props}>
    {React.Children.map(props.children, child => (
      <li>{child}</li>
    ))}
  </StyledLinkList>
)

LinkList.defaultProps = {
  direction: 'column',
}

LinkList.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
}

export default LinkList
