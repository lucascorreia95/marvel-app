import React, { Component } from 'react'

class ComicsHeader extends Component {
  render() {
    return (
      <div className="comics__header">
        <h1 className="comics__name">{this.props.name}</h1>
        <figure className="comics__img">
          <img src={this.props.thumbnail} alt={this.props.name}></img>
        </figure>
      </div>
    )
  }
}

export default ComicsHeader