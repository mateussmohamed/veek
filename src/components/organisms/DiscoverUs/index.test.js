import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import DiscoverUs from './index'

describe('[<DiscoverUs />]', () => {
  const wrap = (props = {}) => shallow(<DiscoverUs {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
