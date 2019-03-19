import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom"

import { chooseCharacters } from './ResultActions'

class ResultList extends Component {
  render() {
    const thumbnail = `${this.props.thumbnail.path}/portrait_medium.${this.props.thumbnail.extension}`
    return (
      <li className="result__item">
        <Link
          to="/characters"
          className="result__item-link"
          onClick={() => this.props.chooseCharacters(this.props.id)}
        >
            <figure className="result__item-image">
              <img
                src={thumbnail}
                alt={this.props.name}
              />
            </figure>
            <div className="result__item-name">
              <span>
                {this.props.name}
                {this.props.title}
              </span>
            </div>
        </Link>
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({chooseCharacters}, dispatch)
export default connect(null, mapDispatchToProps)(ResultList)