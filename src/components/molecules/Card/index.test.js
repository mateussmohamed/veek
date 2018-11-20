import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Card from './index'

describe('[<Card />]', () => {
  const wrap = (props = {}) => shallow(<Card {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
