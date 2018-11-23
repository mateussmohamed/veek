import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CardUserImage from './index'

describe('[<CardUserImage />]', () => {
  const wrap = (props = {}) => shallow(<CardUserImage {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
