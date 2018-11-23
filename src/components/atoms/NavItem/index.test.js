import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import NavItem from './index'

describe('[<NavItem />]', () => {
  const wrap = (props = {}) => shallow(<NavItem {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a NavItem' })

    expect(wrapper).toMatchSnapshot()
  })
})
