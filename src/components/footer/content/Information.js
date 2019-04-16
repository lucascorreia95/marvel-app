import React, { Component } from 'react'

class Information extends Component {
  render() {
    return (
      <div className="footer__information">
        <a href="https://github.com/lucascorreia95/marvel-app" target="_blank" rel="noopener noreferrer">Repository - front-end</a>
        <a href="https://github.com/lucascorreia95/marvel-api" target="_blank" rel="noopener noreferrer">Repository - back-end</a>
        <a href="https://developer.marvel.com/" target="_blank" rel="noopener noreferrer">Marvel API</a>
      </div>
    )
  }
}

export default Information