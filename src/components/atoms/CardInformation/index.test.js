import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CardInformation from './index'

describe('[<CardInformation />]', () => {
  const wrap = (props = {}) => shallow(<CardInformation {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
