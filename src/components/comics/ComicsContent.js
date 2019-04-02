import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom"

import { getComics } from './ComicsActions'
import { loading } from '../resut/ResultActions'

import ComicsHeader from './ComicsHeader'
import ComicsDescription from './ComicsDescription'
import ComicsCharacters from './ComicsCharacters'
import ComicsUrl from './ComicsUrl'

class ComicsContent extends Component {

    componentDidMount(){
        this.props.loading()
        this.props.getComics(this.props.route, this.props.id)
    }

    render() {

        if (this.props.comics.data){
            
            const thumbnail = `${this.props.comics.data.results[0].thumbnail.path}.${this.props.comics.data.results[0].thumbnail.extension}`
            
            return (
                <div className="comics__content">
                    <Link to="/result" className="comics__go-back">go back</Link>
                    
                    <ComicsHeader
                        name={this.props.comics.data.results[0].title}
                        thumbnail={thumbnail}
                    />

                    <ComicsDescription
                        description={this.props.comics.data.results[0].description}
                    />

                    <ComicsCharacters />

                    <ComicsUrl />

                </div>
            )
        }else{
            return(
                <div className="comics__content">
                    <Link to="/result" className="comics__go-back">go back</Link>
                </div>
            )
        
        }
    }
}

const mapStateToProps = state => ({
    comics: state.comics.comics,
    route: state.searchForm.route,
    id: state.result.item
})
const mapDispatchToProps = dispatch => bindActionCreators({getComics, loading}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ComicsContent)