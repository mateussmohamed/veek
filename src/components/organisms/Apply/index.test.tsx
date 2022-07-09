import React from 'react'

import { Apply } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Apply />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <Apply />)

    expect(wrapper).toMatchSnapshot()
  })
})
