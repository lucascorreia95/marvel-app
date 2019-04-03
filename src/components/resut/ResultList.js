import React, { Component } from 'react'
import ResultItem from './ResultItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom"
import { loading } from './ResultActions'

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
          { this.props.result.total === 0 &&
              <li className="result__list-item--empty">
                Sorry, nothing was found =(
              </li>
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
const mapDispatchToProps = dispatch => bindActionCreators({loading}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ResultList)