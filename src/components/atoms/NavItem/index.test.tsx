import React from 'react'

import { NavItem } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<NavItem />]', () => {
  const wrap = props => withThemeProvider(() => <NavItem {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a NavItem' })

    expect(wrapper).toMatchSnapshot()
  })
})
