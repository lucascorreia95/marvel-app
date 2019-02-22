import React, { Component } from 'react'

import List from './List'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__wrapper">
          <span className="home__text">What are we talking about?</span>
          <List />
        </div>
      </div>
    )
  }
}

export default Home