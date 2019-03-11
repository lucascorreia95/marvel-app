import React, { Component } from 'react'
import ResultItem from './ResultItem'
import { connect } from 'react-redux'

import { Link } from "react-router-dom"

class ResultList extends Component {
  render() {
    console.log(this.props.result)
    return (
      <div className="result__wrapper">
        <Link to="/search" className="result__go-back">go back</Link>
        <div className="result__header">
          <span>result for "{this.props.keyWord}"</span>
        </div>
        <ul className="result__list">
          { this.props.result.results &&
              this.props.result.results.map( item => (
                <ResultItem
                  key={item.id}
                  name={item.name}
                  title={item.title}
                  thumbnail={item.thumbnail}
                />
              ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  result: state.result.result,
  keyWord: state.searchForm.inputValue
})

export default connect(mapStateToProps)(ResultList)