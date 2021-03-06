
import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import Hello from '../components/Hello'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
    </Switch>
  </div>
)

export default routes