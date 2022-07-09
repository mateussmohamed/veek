import React from 'react'

import { Label } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Label />]', () => {
  const wrap = props => withThemeProvider(() => <Label {...props} />)

  describe('when pass props', () => {
    test('matches to snapshot', () => {
      const wrapper = wrap({ value: 'test@mail.com' })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
