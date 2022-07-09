import React from 'react'

import { Card } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Card />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <Card />)

    expect(wrapper).toMatchSnapshot()
  })
})
