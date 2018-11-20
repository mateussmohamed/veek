import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Label from './index'

describe('[<Label />]', () => {
  const wrap = (props = {}) => shallow(<Label {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })

  describe('when pass props', () => {
    test('matches to snapshot', () => {
      const wrapper = wrap({ value: 'test@mail.com' })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
