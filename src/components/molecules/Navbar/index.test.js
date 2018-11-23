import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Navbar from './index'

describe('[<Navbar />]', () => {
  const wrap = (props = {}) => shallow(<Navbar {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: [] })

    expect(wrapper).toMatchSnapshot()
  })
})
