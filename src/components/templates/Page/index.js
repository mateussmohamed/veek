import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header, Footer } from 'organisms'

const Main = styled.div`
  display: block;
`

const Page = props => (
  <Main>
    <Header />
    {props.children}
    <Footer />
  </Main>
)

Page.propTypes = {
  children: PropTypes.node,
}

export default Page
