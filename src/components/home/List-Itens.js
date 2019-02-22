import React, { Component } from 'react'

class ListItens extends Component {
  render() {
    return (
        <li className="home__list-item">
            <a href="/" className="home__list-link">
                <img src={this.props.image} alt="icon" className="home__list-img" />
                <span className="home__list-title">{this.props.title}</span>
            </a>
        </li>
    )
  }
}

export default ListItens