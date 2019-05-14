import React, { Component } from 'react'

import './Loading.css'

import loading from '../../assets/img/loading-img.gif'

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <figure>
            <img src={loading} alt="Loading"></img>
        </figure>
      </div>
    )
  }
}

export default Loading