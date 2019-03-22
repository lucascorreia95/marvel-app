import React, { Component } from 'react'
import './Characters.css'

import CharactersContent from './CharactersContent'

class Characters extends Component {
  render() {
    return (
      <div className="characters">
        <CharactersContent />
      </div>
    )
  }
}

export default Characters