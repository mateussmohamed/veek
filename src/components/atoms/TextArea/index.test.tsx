import React from 'react'

import { TextArea } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<TextArea />]', () => {
  const wrap = props => withThemeProvider(() => <TextArea {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ name: 'comments', value: 'bla bla bla' })

    expect(wrapper).toMatchSnapshot()
  })
})
