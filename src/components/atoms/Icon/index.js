import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Facebook from './Facebook'
import Twitter from './Twitter'
import Instagram from './Instagram'
import Linkedin from './Linkedin'

const ICONS = {
  facebook: <Facebook />,
  twitter: <Twitter />,
  instagram: <Instagram />,
  linkedin: <Linkedin />,
}

const IconStyled = styled.i`
  svg {
    path {
      :hover {
        box-shadow: 2px 3px 6px 0 #000;
      }
    }
  }
`

const Icon = props => <IconStyled>{ICONS[props.name]}</IconStyled>

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Icon
