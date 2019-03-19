import React, { Component } from 'react'

class CharactersHeader extends Component {
  render() {
    return (
      <div className="characters__header">
        <h1 className="characters__name">{this.props.name}</h1>
        <figure>
          <img src={this.props.thumbnail} alt={this.props.name}></img>
        </figure>
      </div>
    )
  }
}

export default CharactersHeader