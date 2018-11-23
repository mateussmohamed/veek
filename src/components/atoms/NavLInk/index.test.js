import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import NavLink from './index'

describe('[<NavLink />]', () => {
  const wrap = (props = {}) => shallow(<NavLink {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a NavLink' })

    expect(wrapper).toMatchSnapshot()
  })
})
