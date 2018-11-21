import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Header from './index'

describe('[<Header />]', () => {
  const wrap = (props = {}) => shallow(<Header {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
