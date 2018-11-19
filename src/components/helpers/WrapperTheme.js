import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme, { GlobalStyle } from '../theme'

const Wrapper = props => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      {props.children}
    </div>
  </ThemeProvider>
)

Wrapper.propTypes = {
  children: PropTypes.node,
}

export default Wrapper
