import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLink = styled.a`
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

const Link = props => <StyledLink {...props}>{props.children}</StyledLink>

Link.defaultProps = {
  color: '#fff',
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
}

export default Link
