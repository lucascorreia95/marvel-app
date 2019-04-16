import React, { Component } from 'react'
import './Characters.css'

import CharactersContent from './CharactersContent'

class Characters extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="characters">
        <CharactersContent />
      </div>
    )
  }
}

export default Characters