import React, { Component, FC } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './index'

const getDisplayName = (component: FC) =>
  component.displayName || component.name || 'Component'

const withThemeProvider = (WrappedComponent: FC) =>
  class extends Component {
    static displayName = `withThemeProvider(${getDisplayName(
      WrappedComponent,
    )})`

    render() {
      return (
        <ThemeProvider theme={theme}>
          <WrappedComponent {...this.props} />
        </ThemeProvider>
      )
    }
  }

export default withThemeProvider
