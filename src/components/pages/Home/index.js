import React from 'react'

import { Page } from 'templates'
import { Hero, FormApplication, DiscoverNews } from 'organisms'

const Home = () => (
  <Page>
    <Hero />
    <DiscoverNews />
    <FormApplication />
  </Page>
)

export default Home
