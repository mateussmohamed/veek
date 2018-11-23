import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CardFooter from './index'

describe('[<CardFooter />]', () => {
  const wrap = (props = {}) => shallow(<CardFooter {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
