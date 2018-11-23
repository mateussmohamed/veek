import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import FullContainer from './index'

describe('[<FullContainer />]', () => {
  const wrap = (props = {}) => shallow(<FullContainer {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
