import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CardContent from './index'

describe('[<CardContent />]', () => {
  const wrap = (props = {}) => shallow(<CardContent {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
