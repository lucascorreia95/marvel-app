import React, { Component } from 'react'

class SingleHeader extends Component {
  render() {
    return (
      <div className="single__header">
        <h1 className="single__name">{this.props.name}</h1>
        <figure>
          <img src={this.props.thumbnail} alt={this.props.name}></img>
        </figure>
      </div>
    )
  }
}

export default SingleHeader