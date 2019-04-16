import React, { Component } from 'react'
import './Comics.css'

import ComicsContent from './ComicsContent'

class Comics extends Component {
  
  componentDidMount(){
      window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="comics">
        <ComicsContent />
      </div>
    )
  }
}

export default Comics