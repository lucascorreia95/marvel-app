import React, { Component } from 'react'

import Api from '../../services/Api'

class ComicsCharacter extends Component {
    
    state = {
        path: "",
        extension: ""
    }

    async componentDidMount(){

        const params = this.props.character.resourceURI ? this.props.character.resourceURI.split("/") : ''

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
            <div className="comic__characters">
                <figure className="comic__characters-img">
                    <img src={thumbnail} alt={this.props.character.name} ></img>
                </figure>
                <h2 className="comic__characters-title">{this.props.character.name}</h2>
            </div>
        )
    }
}

export default ComicsCharacter