import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../components/home/Home'
import Search from '../components/search/Search'
import Result from '../components/resut/Result'
import Single from '../components/single/Single'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/result" component={Result} />
          <Route path="/single" component={Single} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
