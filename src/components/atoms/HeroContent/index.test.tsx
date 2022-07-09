import React from 'react'

import { HeroContent } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<HeroContent />]', () => {
  const wrap = props => withThemeProvider(() => <HeroContent {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a content!' })

    expect(wrapper).toMatchSnapshot()
  })
})
