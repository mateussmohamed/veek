import React from 'react'

import { FullContainer } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<FullContainer />]', () => {
  const wrap = props => withThemeProvider(() => <FullContainer {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
