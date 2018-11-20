import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Molecule from './index'

describe('[<Molecule />]', () => {
  const wrap = (props = {}) => shallow(<Molecule {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Molecule' })

    expect(wrapper).toMatchSnapshot()
  })
})
