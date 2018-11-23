import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import ToggleMenu from './index'

describe('[<ToggleMenu />]', () => {
  const wrap = (props = {}) => shallow(<ToggleMenu {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
