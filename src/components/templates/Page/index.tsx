import React from 'react'
import styled from 'styled-components'

import { Header, Footer } from '../../organisms'

const Main = styled.div`
  display: block;
`

interface PageProps {
  children: React.ReactNode
}

export const Page = (props: PageProps) => (
  <Main>
    <Header />
    {props.children}
    <Footer />
  </Main>
)
