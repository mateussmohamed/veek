import React from 'react'

import { Hero } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Hero />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <Hero />)

    expect(wrapper).toMatchSnapshot()
  })
})
