import React from 'react'

import { Page } from 'templates'
import { Atom } from 'atoms'
import { Molecule } from 'molecules'
import { Organism } from 'organisms'

const Home = () => (
  <Page>
    <h1>Home Page</h1>
    <Atom>I am a Atom</Atom>
    <Molecule>I am a Molecule</Molecule>
    <Organism>I am a Organism</Organism>
  </Page>
)

export default Home
