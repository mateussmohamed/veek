import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import File from './index'

describe('[<File />]', () => {
  const wrap = (props = {}) => shallow(<File {...props} />)

  test('matches to snapshot', () => {
    const props = { name: 'document', onChange: jest.fn(args => args) }
    const wrapper = wrap(props)

    expect(wrapper).toMatchSnapshot()
  })
})
