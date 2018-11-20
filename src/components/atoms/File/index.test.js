import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import File from './index'

describe('[<File />]', () => {
  const wrap = (props = {}) => shallow(<File {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ name: 'cv', onChange: jest.fn() })

    expect(wrapper).toMatchSnapshot()
  })

  describe('when pass props', () => {
    test('matches to snapshot', () => {
      const wrapper = wrap({ name: 'cv', onChange: jest.fn() })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
