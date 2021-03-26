import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../views/Home'
import About from "../../views/About"

const RouterSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Switch>
  )
}

export default RouterSwitch
