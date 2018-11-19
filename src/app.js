import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from 'templates'
import { Home } from 'pages'

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </Layout>
  )
}

export default App
