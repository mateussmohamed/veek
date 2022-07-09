import React from 'react'

import { CardImage } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<CardImage />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <CardImage />)

    expect(wrapper).toMatchSnapshot()
  })
})
