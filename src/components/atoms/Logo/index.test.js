import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Logo from './index'

describe('[<Logo />]', () => {
  const wrap = (props = {}) => shallow(<Logo {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
