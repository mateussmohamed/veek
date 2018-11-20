import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Link from './index'

describe('[<Link />]', () => {
  const wrap = (props = {}) => shallow(<Link {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Link' })

    expect(wrapper).toMatchSnapshot()
  })

  describe('when pass props', () => {
    test('when pass color prop', () => {
      const wrapper = wrap({ color: '#283583' })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
