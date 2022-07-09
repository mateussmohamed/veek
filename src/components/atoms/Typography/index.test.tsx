import React from 'react'

import { Typography } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Typography />]', () => {
  const wrap = props => withThemeProvider(() => <Typography {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ variant: 'body' })

    expect(wrapper).toMatchSnapshot()
  })

  describe('when pass variant prop', () => {
    test('should equals the title', () => {
      const wrapper = wrap({ children: 'title', variant: 'title' })

      expect(wrapper).toMatchSnapshot()
    })

    test('should equals the title2', () => {
      const wrapper = wrap({ children: 'title2', variant: 'title2' })

      expect(wrapper).toMatchSnapshot()
    })

    test('should equals the subtitle', () => {
      const wrapper = wrap({ children: 'subtitle', variant: 'subtitle' })

      expect(wrapper).toMatchSnapshot()
    })

    test('should equals the subtitle2', () => {
      const wrapper = wrap({ children: 'subtitle2', variant: 'subtitle2' })

      expect(wrapper).toMatchSnapshot()
    })

    test('should equals the body', () => {
      const wrapper = wrap({ children: 'body', variant: 'body' })

      expect(wrapper).toMatchSnapshot()
    })

    test('should equals the legend', () => {
      const wrapper = wrap({ children: 'legend', variant: 'legend' })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
