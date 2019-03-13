import React, { Component } from 'react'

class SingleDescription extends Component {
  render() {
    return (
      <div className="single__description">
        <span>{this.props.description}</span>
      </div>
    )
  }
}

export default SingleDescription