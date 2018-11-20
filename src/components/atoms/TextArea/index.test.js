import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import TextArea from './index'

describe('[<TextArea />]', () => {
  const wrap = (props = {}) => shallow(<TextArea {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ name: 'comments', value: 'bla bla bla' })

    expect(wrapper).toMatchSnapshot()
  })
})
