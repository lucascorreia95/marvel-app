import React, { Component } from 'react'

class ComicsUrlLink extends Component {
  render() {
    return (
      <div className="comics__url-link">
        <a href={this.props.link.url} target="_blank" rel="noopener noreferrer">{this.props.link.type}</a>
      </div>
    )
  }
}

export default ComicsUrlLink