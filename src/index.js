import React from 'react'
import { render } from 'react-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

// import { Layout } from 'templates'
// import { Home } from 'pages'

import app from './app'

const renderApp = NextApp => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.getElementById('app'),
  )
}

renderApp(app)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}

// render(<App />, document.getElementById('app'))
