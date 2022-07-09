import React from 'react'

import { DiscoverNews } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<DiscoverNews />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <DiscoverNews />)

    expect(wrapper).toMatchSnapshot()
  })
})
