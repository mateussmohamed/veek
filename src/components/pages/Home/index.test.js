import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Home from '.'

describe('[<Home />]', () => {
  const wrap = (props = {}) => shallow(<Home {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
