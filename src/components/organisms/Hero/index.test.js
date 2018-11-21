import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Hero from './index'

describe('[<Hero />]', () => {
  const wrap = (props = {}) => shallow(<Hero {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
