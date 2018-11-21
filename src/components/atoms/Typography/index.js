import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const mapVariants = {
  title: 'h1',
  title2: 'h2',
  subtitle: 'h3',
  subtitle2: 'h4',
  body: 'p',
  legend: 'p',
}

const title = css`
  color: #283583;
  font-size: 82px;
  font-weight: 700;
  text-align: ${props => props.align || 'center'};
`
const title2 = css`
  color: #020202;
  font-size: 48px;
  font-weight: 400;
  text-align: ${props => props.align || 'center'};
`

const subtitle = css`
  color: #818182;
  font-size: 24px;
  font-weight: 400;
  text-align: ${props => props.align || 'center'};
`
const subtitle2 = css`
  color: #818182;
  font-size: 20px;
  font-weight: 400;
  text-align: ${props => props.align || 'center'};
`
const body = css`
  color: #818182;
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  text-align: ${props => props.align || 'left'};
`

const legend = css`
  color: #a2a2a2;
  font-size: 14px;
  font-weight: 400;
  text-align: ${props => props.align || 'left'};
`

const StyledTypography = styled.span`
  font-family: Lato, sans-serif;
  margin: 0.25em 0;
  line-height: normal;

  ${props => props.variant === 'title' && title};
  ${props => props.variant === 'title2' && title2};
  ${props => props.variant === 'subtitle' && subtitle};
  ${props => props.variant === 'subtitle2' && subtitle2};
  ${props => props.variant === 'body' && body};
  ${props => props.variant === 'legend' && legend};
`

const Typography = props => (
  <StyledTypography {...props} as={mapVariants[props.variant]} />
)

Typography.defaultProps = {
  variant: 'body',
}

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
  align: PropTypes.string,
}

export default Typography
