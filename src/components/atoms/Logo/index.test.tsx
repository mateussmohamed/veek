import React from 'react'

import { Logo } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Logo />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <Logo />)

    expect(wrapper).toMatchSnapshot()
  })
})
