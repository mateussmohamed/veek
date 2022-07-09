import React from 'react'

import { CardContent } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<CardContent />]', () => {
  const wrap = props => withThemeProvider(() => <CardContent {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
