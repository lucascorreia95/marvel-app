import React, { Component } from 'react'

import ListItem from './List-Itens'

import characterscover from '../../assets/img/iron-man.png'
import comiccover from '../../assets/img/comic-cover.jpg'
import seriescover from '../../assets/img/iron-man.png'

class List extends Component {
  render() {
    return (
        <ul className="home__list">
            <ListItem image={characterscover} title="characters" />
            <ListItem image={comiccover} title="comics" />
            <ListItem image={seriescover} title="series" />
        </ul>
    )
  }
}

export default List