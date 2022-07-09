import React from 'react'

import { FacebookIcon } from './Facebook'
import { TwitterIcon } from './Twitter'
import { InstagramIcon } from './Instagram'
import { LinkedinIcon } from './Linkedin'
import { ClockIcon } from './Clock'
import { MenuIcon } from './Menu'

const getIcon = (name: string) =>
  ({
    facebook: <FacebookIcon />,
    twitter: <TwitterIcon />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedinIcon />,
    clock: <ClockIcon />,
    menu: <MenuIcon />,
  }[name])

interface IconProps {
  name: string
  color?: string
}

export const Icon = (props: IconProps) => getIcon(props.name)
