import React from 'react'

import { CardFooter } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<CardFooter />]', () => {
  const wrap = props => withThemeProvider(() => <CardFooter {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
