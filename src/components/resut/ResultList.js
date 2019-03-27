import React, { Component } from 'react'
import ResultItem from './ResultItem'
import { connect } from 'react-redux'

import { Link } from "react-router-dom"

class ResultList extends Component {
  render() {
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
                  id={item.id}
                  name={item.name}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  route ={this.props.route}
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
  keyWord: state.searchForm.inputValue,
  route: state.searchForm.route
})

export default connect(mapStateToProps)(ResultList)