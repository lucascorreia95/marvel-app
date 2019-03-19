import React, { Component } from 'react'

class CharactersDescription extends Component {
  render() {
    return (
      <div className="characters__description">
        <span>{this.props.description}</span>
      </div>
    )
  }
}

export default CharactersDescription