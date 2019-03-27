import React, { Component } from 'react'
import './Comics.css'

import ComicsContent from './ComicsContent'

class Comics extends Component {
  render() {
    return (
      <div className="comics">
        <ComicsContent />
      </div>
    )
  }
}

export default Comics