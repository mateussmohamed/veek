import React from 'react'

import { DiscoverUs } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<DiscoverUs />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <DiscoverUs />)

    expect(wrapper).toMatchSnapshot()
  })
})
