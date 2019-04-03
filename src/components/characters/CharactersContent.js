import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom"

import { getCharacters } from './CharactersActions'
import { loading } from '../resut/ResultActions'

import CharactersHeader from './CharactersHeader'
import CharactersDescription from './CharactersDescription'
import CharactersComics from './CharactersComics'
import CharactersUrl from './CharactersUrl'
import Loading from '../loading/Loading'

class CharactersContent extends Component {
    
    componentDidMount(){
        this.props.loading()
        this.props.getCharacters(this.props.route, this.props.id)
    }

    render() {

        let thumbnail = ""

        if (this.props.characters.data){   
            thumbnail = `${this.props.characters.data.results[0].thumbnail.path}.${this.props.characters.data.results[0].thumbnail.extension}`
        }

        return (
            <div className="characters__content">
                
                { this.props.loadingState && 
                    <Loading />
                }

                { this.props.characters.data && !this.props.loadingState &&
                    <div>
                        <Link to="/search" className="characters__go-back">go back</Link>
                    
                        <CharactersHeader
                            name={this.props.characters.data.results[0].name}
                            thumbnail={thumbnail}
                        />

                        <CharactersDescription
                            description={this.props.characters.data.results[0].description}
                        />

                        <CharactersComics />

                        <CharactersUrl />
                    </div>
                }

            </div>
        )
    }
}

const mapStateToProps = state => ({
    characters: state.characters.characters,
    route: state.searchForm.route,
    id: state.result.item,
    loadingState: state.searchForm.loading
})
const mapDispatchToProps = dispatch => bindActionCreators({getCharacters, loading}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CharactersContent)