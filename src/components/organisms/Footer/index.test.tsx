import React from 'react'

import { Footer } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Footer />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <Footer />)

    expect(wrapper).toMatchSnapshot()
  })
})
