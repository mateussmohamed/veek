import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Organism from './index'

describe('[<Organism />]', () => {
  const wrap = (props = {}) => shallow(<Organism {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Organism' })

    expect(wrapper).toMatchSnapshot()
  })
})
