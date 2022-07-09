import React from 'react'

import { CardUserName } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<CardUserName />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <CardUserName />)
    expect(wrapper).toMatchSnapshot()
  })
})
