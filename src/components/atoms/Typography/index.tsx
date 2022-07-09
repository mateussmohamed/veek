import React from 'react'
import styled, { css } from 'styled-components'

const mapVariants = {
  title: 'h1',
  title2: 'h2',
  subtitle: 'h3',
  subtitle2: 'h4',
  body: 'p',
  legend: 'p',
}

interface CommonProps {
  readonly align?: string
}

const title = css<CommonProps>`
  color: #283583;
  font-weight: 700;
  text-align: ${props => props.align || 'center'};

  @media only screen and (min-width: 0em) {
    font-size: 52px;
  }

  @media only screen and (min-width: 48em) {
    font-size: 62px;
  }

  @media only screen and (min-width: 64em) {
    font-size: 82px;
  }
`
const title2 = css<CommonProps>`
  color: #020202;
  font-size: 48px;
  font-weight: 400;
  text-align: ${props => props.align || 'center'};
`

const subtitle = css<CommonProps>`
  color: #818182;
  font-weight: 400;
  text-align: ${props => props.align || 'center'};

  @media only screen and (min-width: 0em) {
    font-size: 18px;
  }

  @media only screen and (min-width: 48em) {
    font-size: 20px;
  }

  @media only screen and (min-width: 64em) {
    font-size: 24px;
  }
`
const subtitle2 = css<CommonProps>`
  color: #818182;
  font-size: 20px;
  font-weight: 400;
  text-align: ${props => props.align || 'center'};
`
const body = css<CommonProps>`
  color: #818182;
  font-weight: 400;

  text-align: ${props => props.align || 'left'};

  @media only screen and (min-width: 0em) {
    font-size: 16px;
    line-height: 20px;
  }

  @media only screen and (min-width: 48em) {
    font-size: 18px;
  }

  @media only screen and (min-width: 64em) {
    font-size: 20px;
    line-height: 30px;
  }
`

const legend = css<CommonProps>`
  color: #a2a2a2;
  font-size: 14px;
  font-weight: 400;
  text-align: ${props => props.align || 'left'};
`

interface TypographyProps {
  readonly children: React.ReactNode
  readonly variant: string
  readonly align?: string
}

const StyledTypography = styled.span<TypographyProps>`
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

export const Typography = ({
  variant = 'body',
  align = 'center',
  ...restProps
}: TypographyProps) => {
  return (
    <StyledTypography
      variant={variant}
      align={align}
      as={mapVariants[variant]}
      {...restProps}
    />
  )
}
