import React from 'react'

import { Icon } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Atom />]', () => {
  const wrap = props => withThemeProvider(() => <Icon {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ name: 'facebook' })

    expect(wrapper).toMatchSnapshot()
  })
})
