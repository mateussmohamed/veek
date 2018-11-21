import React from 'react'

import { Page } from 'templates'
import { Hero, FormApplication, DiscoverUs, DiscoverNews } from 'organisms'

const Home = () => (
  <Page>
    <Hero />
    <DiscoverUs />
    <DiscoverNews />
    <FormApplication />
  </Page>
)

export default Home
