import React, { Component } from 'react'
import ResultItem from './ResultItem'

import { Link } from "react-router-dom"

class ResultList extends Component {
  render() {
    return (
      <div className="result__wrapper">
        <Link to="/search" className="result__go-back">go back</Link>
        <ul className="result__list">
          <ResultItem />
        </ul>
      </div>
    )
  }
}

export default ResultList