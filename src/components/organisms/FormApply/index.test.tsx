import React from 'react'

import { FormApply } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Apply />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <FormApply />)

    expect(wrapper).toMatchSnapshot()
  })
})
