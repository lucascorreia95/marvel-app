import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom"

import Api from '../../services/Api'

import { chooseCharacter } from './ComicsActions'

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
        const params = this.props.character.resourceURI ? this.props.character.resourceURI.split("/") : ''
        const id = params[2] ? params[2] : ""
        const thumbnail = this.state.path ? `${this.state.path}.${this.state.extension}` : ""
        return (
            <div className="comic__characters">
                <Link
                    to="/characters"
                    onClick={() => this.props.chooseCharacter(id)}
                >
                    <figure className="comic__characters-img">
                        <img src={thumbnail} alt={this.props.character.name} ></img>
                    </figure>
                    <h2 className="comic__characters-title">{this.props.character.name}</h2>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({chooseCharacter}, dispatch)
export default connect(null, mapDispatchToProps)(ComicsCharacter)