import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CardUserName from './index'

describe('[<CardUserName />]', () => {
  const wrap = (props = {}) => shallow(<CardUserName {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
