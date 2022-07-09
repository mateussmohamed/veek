import React from 'react'

import { Navbar } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Navbar />]', () => {
  const wrap = props => withThemeProvider(() => <Navbar {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: [] })

    expect(wrapper).toMatchSnapshot()
  })
})
