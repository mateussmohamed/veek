import React from 'react'

import { Header } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Header />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <Header />)

    expect(wrapper).toMatchSnapshot()
  })
})
