import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Apply from './index'

describe('[<Apply />]', () => {
  const wrap = (props = {}) => shallow(<Apply {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
