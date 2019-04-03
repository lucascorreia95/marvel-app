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
import Loading from '../loading/Loading'

class ComicsContent extends Component {

    componentDidMount(){
        this.props.loading()
        this.props.getComics(this.props.route, this.props.id)
    }

    render() {
        
        let thumbnail = ""

        if (this.props.comics.data){
            thumbnail = `${this.props.comics.data.results[0].thumbnail.path}.${this.props.comics.data.results[0].thumbnail.extension}`
        }
        
        return (
            <div className="comics__content">

                { this.props.loadingState && 
                    <Loading />
                }
                
                { this.props.comics.data && !this.props.loadingState &&
                    <div>
                        <Link to="/search" className="comics__go-back">go back</Link>
                        
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
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comics: state.comics.comics,
    route: state.searchForm.route,
    id: state.result.item,
    loadingState: state.searchForm.loading
})
const mapDispatchToProps = dispatch => bindActionCreators({getComics, loading}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ComicsContent)