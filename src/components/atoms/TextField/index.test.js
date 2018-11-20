import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import TextField from './index'

describe('[<TextField />]', () => {
  const wrap = (props = {}) => shallow(<TextField {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ name: 'email', onChange: jest.fn() })

    expect(wrapper).toMatchSnapshot()
  })
})
