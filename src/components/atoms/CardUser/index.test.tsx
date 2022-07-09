import React from 'react'

import { CardUser } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<CardUser />]', () => {
  const wrap = props => withThemeProvider(() => <CardUser {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
