import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import HeroContent from './index'

describe('[<HeroContent />]', () => {
  const wrap = (props = {}) => shallow(<HeroContent {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a content!' })

    expect(wrapper).toMatchSnapshot()
  })
})
