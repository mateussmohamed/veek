import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Layout from '.'

describe('[<Layout />]', () => {
  const wrap = (props = {}) => shallow(<Layout {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: '' })

    expect(wrapper).toMatchSnapshot()
  })
})
