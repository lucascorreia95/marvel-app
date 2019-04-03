import React, { Component } from 'react'
import ResultList from './ResultList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getResults } from './ResultActions'
import { loading } from '../resut/ResultActions'

import Loading from '../loading/Loading'

import './Result.css'

class Result extends Component {

  componentDidMount(){
    this.props.loading()
    this.props.getResults(this.props.route, this.props.inputValue, this.props.params)
  }

  render() {
    return (
      <div className="result">
        { this.props.loadingState && 
          <Loading />
        }
        { !this.props.loadingState && 
          <ResultList />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  inputValue: state.searchForm.inputValue,
  route: state.searchForm.route,
  params: state.searchForm.params,
  loadingState: state.searchForm.loading
})
const mapDispatchToProps = dispatch => bindActionCreators({getResults, loading}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Result)