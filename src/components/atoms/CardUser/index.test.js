import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CardUser from './index'

describe('[<CardUser />]', () => {
  const wrap = (props = {}) => shallow(<CardUser {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
