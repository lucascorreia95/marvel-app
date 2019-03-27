import React, { Component } from 'react'
import { connect } from 'react-redux'

import ComicsUrlLink from './ComicsUrlLink'

class ComicsUrl extends Component {
  render() {
    return (
      <div className="comics__url">
        <div className="comics__url-header">
          for more informations
        </div>
        <div className="comics__url-links">
          {this.props.urls.data.results[0].urls.map( (link, index) => (
            <ComicsUrlLink key={index} link={link} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  urls: state.comics.comics
})
export default connect(mapStateToProps)(ComicsUrl)