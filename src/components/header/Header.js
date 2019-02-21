import React, { Component } from 'react'

import MarvelLogo from '../../assets/img/MarvelLogo.svg'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="header__logo" src={MarvelLogo} alt="Marvel Logo" />
        <div className="header__background"></div>
      </div>
    )
  }
}

export default Header