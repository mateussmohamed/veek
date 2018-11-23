import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import ScrollDown from './index'

describe('[<ScrollDown />]', () => {
  const wrap = (props = {}) => shallow(<ScrollDown {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ to: {} })

    expect(wrapper).toMatchSnapshot()
  })
})
