import React from 'react'

import { File } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<File />]', () => {
  const wrap = props => withThemeProvider(() => <File {...props} />)

  test('matches to snapshot', () => {
    const props = { name: 'document', onChange: jest.fn(args => args) }
    const wrapper = wrap(props)

    expect(wrapper).toMatchSnapshot()
  })
})
