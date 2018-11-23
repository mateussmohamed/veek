import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Field from './index'

describe('[<Field />]', () => {
  const wrap = (props = {}) => shallow(<Field {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({
      label: 'First Name',
      name: 'name',
    })

    expect(wrapper).toMatchSnapshot()
  })

  describe('when pass type prop', () => {
    test('matches to snapshot', () => {
      const wrapper = wrap({
        label: 'Upload your Avatar',
        name: 'avatar',
        type: 'file',
      })

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when pass multiline prop', () => {
    test('matches to snapshot with textarea', () => {
      const wrapper = wrap({
        label: 'Comments',
        name: 'comments',
        multiline: true,
      })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
