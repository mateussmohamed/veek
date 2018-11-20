import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Atom from './index'

describe('[<Atom />]', () => {
  const wrap = (props = {}) => shallow(<Atom {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Atom' })

    expect(wrapper).toMatchSnapshot()
  })
})