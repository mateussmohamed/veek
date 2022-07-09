import React from 'react'

import { NavItems } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<NavItems />]', () => {
  const wrap = props => withThemeProvider(() => <NavItems {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: [] })

    expect(wrapper).toMatchSnapshot()
  })
})
