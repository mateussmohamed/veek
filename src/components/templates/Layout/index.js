import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme, { GlobalStyle } from '../../theme'

const Layout = props => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      {props.children}
    </React.Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
