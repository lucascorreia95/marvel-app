import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.test}
      </div>
    )
  }
}

const mapStateToProps = state => ({test : state.test.value})
export default connect(mapStateToProps)(App)