import React from 'react'

import { TextField } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<TextField />]', () => {
  const wrap = props => withThemeProvider(() => <TextField {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ name: 'email', onChange: jest.fn() })

    expect(wrapper).toMatchSnapshot()
  })
})
