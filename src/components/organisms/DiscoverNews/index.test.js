import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import DiscoverNews from './index'

describe('[<DiscoverNews />]', () => {
  const wrap = (props = {}) => shallow(<DiscoverNews {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
