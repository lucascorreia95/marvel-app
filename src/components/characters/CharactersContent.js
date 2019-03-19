import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom"

import { getCharacters } from './CharactersActions'
import CharactersHeader from './CharactersHeader'
import CharactersDescription from './CharactersDescription'
import CharactersComics from './CharactersComics'
import CharactersUrl from './CharactersUrl'

class CharactersContent extends Component {
    
    componentDidMount(){
        this.props.getCharacters(this.props.route, this.props.id)
    }

    render() {

        if (this.props.characters.data){
            
            const thumbnail = `${this.props.characters.data.results[0].thumbnail.path}.${this.props.characters.data.results[0].thumbnail.extension}`
            
            return (
                <div className="characters__content">
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
            )
        }else{
            return null
        }
    }
}

const mapStateToProps = state => ({
    characters: state.characters.characters,
    route: state.searchForm.route,
    id: state.result.characters
})
const mapDispatchToProps = dispatch => bindActionCreators({getCharacters}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CharactersContent)