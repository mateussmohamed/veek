import React from 'react'

import { Page } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Page />]', () => {
  const wrap = props => withThemeProvider(() => <Page {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: '' })

    expect(wrapper).toMatchSnapshot()
  })
})
