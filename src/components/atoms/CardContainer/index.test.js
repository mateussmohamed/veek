import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CardContainer from './index'

describe('[<CardContainer />]', () => {
  const wrap = (props = {}) => shallow(<CardContainer {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
