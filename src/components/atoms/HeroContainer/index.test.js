import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import HeroContainer from './index'

describe('[<HeroContainer />]', () => {
  const wrap = (props = {}) => shallow(<HeroContainer {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
