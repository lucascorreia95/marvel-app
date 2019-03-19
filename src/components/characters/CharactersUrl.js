import React, { Component } from 'react'
import { connect } from 'react-redux'

import CharactersUrlLink from './CharactersUrlLink'

class CharactersUrl extends Component {
  render() {
    return (
      <div className="characters__url">
        <div className="characters__url-header">
          some links with more informations
        </div>
        <div className="characters__url-links">
          {this.props.urls.data.results[0].urls.map( link => (
            <CharactersUrlLink key={link.url} link={link} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  urls: state.characters.characters
})
export default connect(mapStateToProps)(CharactersUrl)