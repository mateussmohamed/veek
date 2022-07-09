import React from 'react'

import { ToggleMenu } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<ToggleMenu />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <ToggleMenu />)

    expect(wrapper).toMatchSnapshot()
  })
})
