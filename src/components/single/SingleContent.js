import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom"

import { getSingle } from './SingleActions'
import SingleHeader from './SingleHeader'
import SingleDescription from './SingleDescription';

class SingleContent extends Component {
    
    componentDidMount(){
        this.props.getSingle(this.props.route, this.props.id)
    }

    render() {
        
        console.log("props", this.props)

        if (this.props.single.data){
            
            const thumbnail = `${this.props.single.data.results[0].thumbnail.path}.${this.props.single.data.results[0].thumbnail.extension}`
            
            return (
                <div className="single__content">
                    <Link to="/search" className="single__go-back">go back</Link>
                    <SingleHeader
                        name={this.props.single.data.results[0].name}
                        thumbnail={thumbnail}
                    />
                    <SingleDescription
                        description={this.props.single.data.results[0].description}
                    />
                </div>
            )
        }else{
            return null
        }
    }
}

const mapStateToProps = state => ({
    single: state.single.single,
    route: state.searchForm.route,
    id: state.result.single
})
const mapDispatchToProps = dispatch => bindActionCreators({getSingle}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SingleContent)