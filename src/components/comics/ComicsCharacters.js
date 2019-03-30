import React, { Component } from 'react'
import { connect } from 'react-redux'

import ComicsCharacter from './ComicsCharacter'

class ComicsCharacters extends Component {
    render() {
        
        let charactersArray = []

        for (let i = 0; i < 5; i++) {
            if (this.props.comicsCharacters[i]){
                charactersArray[i] = this.props.comicsCharacters[i]
            }
        }

        return (
            <div className="comics__characters">
                {charactersArray[0] &&
                    <div>
                        <div className="comics__characters-header">
                            <span>some characters in this comic</span>
                        </div>
                        <div className="comics__characters-list">
                            {charactersArray.map( character => (
                                <ComicsCharacter key={character.resourceURI} character={character} />
                            ))}
                        </div> 
                    </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comicsCharacters: state.comics.comics.data.results[0].characters.items
})
export default connect(mapStateToProps)(ComicsCharacters)