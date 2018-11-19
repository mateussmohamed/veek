import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Page from '.'

describe('[<Page />]', () => {
  const wrap = (props = {}) => shallow(<Page {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: '' })

    expect(wrapper).toMatchSnapshot()
  })
})
