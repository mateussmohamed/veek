import React from 'react'

import { CardInformation } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<CardInformation />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <CardInformation />)

    expect(wrapper).toMatchSnapshot()
  })
})
