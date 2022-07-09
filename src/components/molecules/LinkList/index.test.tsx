import React from 'react'

import { LinkList } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<LinkList />]', () => {
  const wrap = props => withThemeProvider(() => <LinkList {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a LinkList' })

    expect(wrapper).toMatchSnapshot()
  })
})
