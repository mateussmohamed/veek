import React from 'react'
import PropTypes from 'prop-types'

import Facebook from './Facebook'
import Twitter from './Twitter'
import Instagram from './Instagram'
import Linkedin from './Linkedin'
import Clock from './Clock'
import Menu from './Menu'

const getIcon = props => ({
  facebook: <Facebook {...props} />,
  twitter: <Twitter {...props} />,
  instagram: <Instagram {...props} />,
  linkedin: <Linkedin {...props} />,
  clock: <Clock {...props} />,
  menu: <Menu {...props} />,
})

const Icon = props => getIcon(props)[props.name]

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
