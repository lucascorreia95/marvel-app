import React, { Component } from 'react'

import { Link } from "react-router-dom"

class ResultList extends Component {
  render() {
    const thumbnail = `${this.props.thumbnail.path}/portrait_medium.${this.props.thumbnail.extension}`
    return (
      <li className="result__item">
        <Link to="/" className="result__item-link">
            <figure className="result__item-image">
              <img
                src={thumbnail}
                alt={this.props.name}
              />
            </figure>
            <div className="result__item-name">
              <span>{this.props.name}</span>
            </div>
        </Link>
      </li>
    )
  }
}

export default ResultList