import React from 'react'

import { Home } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Home />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <Home />)

    expect(wrapper).toMatchSnapshot()
  })
})
