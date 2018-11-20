import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import FormApplication from './index'

describe('[<FormApplication />]', () => {
  const wrap = (props = {}) => shallow(<FormApplication {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
