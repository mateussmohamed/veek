import React from 'react'

import { Link } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Link />]', () => {
  const wrap = props => withThemeProvider(() => <Link {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Link' })

    expect(wrapper).toMatchSnapshot()
  })

  describe('when pass props', () => {
    test('when pass color prop', () => {
      const wrapper = wrap({
        children: 'I am a Link with color',
        color: '#283583',
      })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
