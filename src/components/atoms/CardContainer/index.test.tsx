import React from 'react'

import { CardContainer } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<CardContainer />]', () => {
  const wrap = props => withThemeProvider(() => <CardContainer {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
