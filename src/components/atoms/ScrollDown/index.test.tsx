import React from 'react'

import { ScrollDown } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<ScrollDown />]', () => {
  const wrap = props => withThemeProvider(() => <ScrollDown {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ to: {} })

    expect(wrapper).toMatchSnapshot()
  })
})
