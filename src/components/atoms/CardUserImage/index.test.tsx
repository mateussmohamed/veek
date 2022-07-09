import React from 'react'

import { CardUserImage } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<CardUserImage />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <CardUserImage />)
    expect(wrapper).toMatchSnapshot()
  })
})
