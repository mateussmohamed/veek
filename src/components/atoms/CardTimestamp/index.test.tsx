import React from 'react'

import { CardTimestamp } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<CardTimestamp />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <CardTimestamp />)

    expect(wrapper).toMatchSnapshot()
  })
})
