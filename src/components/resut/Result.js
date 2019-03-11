import React, { Component } from 'react'
import ResultList from './ResultList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getResults } from './ResultActions'

import './Result.css'

class Result extends Component {

  async componentDidMount(){
    this.props.getResults(this.props.route, this.props.inputValue, this.props.params)
  }

  render() {
    return (
      <div className="result">
        <ResultList />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  inputValue: state.searchForm.inputValue,
  route: state.searchForm.route,
  params: state.searchForm.params
})
const mapDispatchToProps = dispatch => bindActionCreators({getResults}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Result)