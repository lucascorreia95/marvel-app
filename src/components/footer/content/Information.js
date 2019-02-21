import React, { Component } from 'react'

class Information extends Component {
  render() {
    return (
      <div className="footer__information">
        <a href="/">About</a>
        <a href="https://github.com/lucascorreia95/marvel-app">Repository</a>
        <a href="https://developer.marvel.com/">Marvel API</a>
      </div>
    )
  }
}

export default Information