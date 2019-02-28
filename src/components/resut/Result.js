import React, { Component } from 'react'
import ResultList from './ResultList'

import './Result.css'

class Result extends Component {
  render() {
    return (
      <div className="result">
        <ResultList />
      </div>
    )
  }
}

export default Result