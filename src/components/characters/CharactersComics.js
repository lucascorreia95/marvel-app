import React, { Component } from 'react'
import { connect } from 'react-redux'

import CharactersComic from './CharactersComic'

class CharactersComics extends Component {
    render() {
        
        let comicsArray = []

        for (let i = 0; i < 5; i++) {
            if (this.props.charactersComics[i]){
                comicsArray[i] = this.props.charactersComics[i]
            }
        }

        return (
            <div className="characters__comics">
                {comicsArray[0] &&
                    <div>
                        <div className="characters__comics-header">
                            <span>some comics</span>
                        </div>
                        <div className="characters__comics-list">
                            {comicsArray.map( comic => (
                                <CharactersComic key={comic.resourceURI} comic={comic} />
                            ))}
                        </div> 
                    </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    charactersComics: state.characters.characters.data.results[0].comics.items
})
export default connect(mapStateToProps)(CharactersComics)