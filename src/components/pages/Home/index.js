import React from 'react'

import { Page } from 'templates'
import { Hero, Apply, DiscoverUs, DiscoverNews } from 'organisms'

const Home = () => (
  <Page>
    <Hero />
    <DiscoverUs />
    <DiscoverNews />
    <Apply />
  </Page>
)

export default Home
