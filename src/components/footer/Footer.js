import React, { Component } from 'react'

import './Footer.css'

import Information from './content/Information'
import Lucas from './content/Lucas'
import Thomaz from './content/Thomaz'
import Copyright from './content/Copyright'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__wrapper">
          <div className="footer__column">
            <Information />
          </div>
          <div className="footer__column">
            <Lucas />
          </div>
          <div className="footer__column">
            <Thomaz />
          </div>
          <div className="footer__copyright">
            <Copyright />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer