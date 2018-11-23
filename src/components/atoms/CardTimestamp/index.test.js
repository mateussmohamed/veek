import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CardTimestamp from './index'

describe('[<CardTimestamp />]', () => {
  const wrap = (props = {}) => shallow(<CardTimestamp {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
