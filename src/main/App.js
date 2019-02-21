import React, { Component } from 'react'

import Header from '../components/header/Header'
import Routes from './routes'
import Footer from '../components/footer/Footer'
import './defaut.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default App