import React, { Component } from 'react'

class ComicsDescription extends Component {
  render() {
    return (
      <div className="characters__description">
        <span>{this.props.description}</span>
      </div>
    )
  }
}

export default ComicsDescription