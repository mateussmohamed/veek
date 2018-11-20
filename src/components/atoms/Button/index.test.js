import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Button from './index'

describe('[<Button />]', () => {
  const wrap = (props = {}) => shallow(<Button {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })

  describe('when pass secondary prop', () => {
    test('matches to snapshot', () => {
      const wrapper = wrap({ secondary: true })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
