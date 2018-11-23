import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import NavItems from './index'

describe('[<NavItems />]', () => {
  const wrap = (props = {}) => shallow(<NavItems {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
