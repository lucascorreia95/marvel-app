import React, { Component } from 'react'

import Api from '../../services/Api'

class CharactersComic extends Component {
    
    state = {
        path: "",
        extension: ""
    }

    async componentDidMount(){

        const params = this.props.comic.resourceURI.split("/")

        const response = await Api.get('/single',{
            params: {
                id: params[2],
                route: params[1]
            }
        })

        this.setState({
            path: response.data.data.results[0].thumbnail.path,
            extension: response.data.data.results[0].thumbnail.extension
        });
    }

    render() {
        const thumbnail = this.state.path ? `${this.state.path}.${this.state.extension}` : ""
        return (
            <div className="characters__comic">
                <figure className="characters__comic-img">
                    <img src={thumbnail} alt={this.props.comic.name} ></img>
                </figure>
                <h2 className="characters__comic-title">{this.props.comic.name}</h2>
            </div>
        )
    }
}

export default CharactersComic