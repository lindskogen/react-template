import React from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import App from "./components/app"
import Start from "./components/start"


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Start} />
    </Route>
  </Router>,
  document.getElementById('root')
)
