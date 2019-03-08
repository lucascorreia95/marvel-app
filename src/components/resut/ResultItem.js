import React, { Component } from 'react'

import { Link } from "react-router-dom"

import seriescover from '../../assets/img/iron-man.png'

class ResultList extends Component {
  render() {
    return (
      <li className="result__item">
        <Link to="/" className="result__item-link">
            <figure className="result__item-image">
              <img
                src={seriescover}
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