import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom"

import Api from '../../services/Api'

import { chooseComic } from './CharactersActions'

class CharactersComic extends Component {
    
    state = {
        path: "",
        extension: ""
    }

    async componentDidMount(){

        const params = this.props.comic.resourceURI ? this.props.comic.resourceURI.split("/") : ''

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
        const params = this.props.comic.resourceURI ? this.props.comic.resourceURI.split("/") : ''
        const id = params[2] ? params[2] : ""
        const thumbnail = this.state.path ? `${this.state.path}.${this.state.extension}` : ""
        return (

            <div className="characters__comic">
                <Link
                    to="/comics"
                    onClick={() => this.props.chooseComic(id)}
                >
                    <figure className="characters__comic-img">
                        <img src={thumbnail} alt={this.props.comic.name} ></img>
                    </figure>
                    <h2 className="characters__comic-title">{this.props.comic.name}</h2>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({chooseComic}, dispatch)
export default connect(null, mapDispatchToProps)(CharactersComic)