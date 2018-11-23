import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CardImage from './index'

describe('[<CardImage />]', () => {
  const wrap = (props = {}) => shallow(<CardImage {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
