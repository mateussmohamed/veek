import React from 'react'

import { Button } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Button />]', () => {
  const wrap = props => withThemeProvider(() => <Button {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ primary: true })

    expect(wrapper).toMatchSnapshot()
  })

  describe('when pass secondary prop', () => {
    test('matches to snapshot', () => {
      const wrapper = wrap({ secondary: true })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
