import React from 'react'

import { Page } from '../../templates'
import { Hero, Apply, DiscoverUs, DiscoverNews } from '../../organisms'

export const Home = () => (
  <Page>
    <Hero />
    <DiscoverUs />
    <DiscoverNews />
    <Apply />
  </Page>
)
