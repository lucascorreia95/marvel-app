import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSingle } from './SingleActions'

class SingleContent extends Component {
    
    componentDidMount(){
        this.props.getSingle(this.props.route, this.props.id)
    }

    render() {
        return (
            <div className="single__content"></div>
        )
    }
}

const mapStateToProps = state => ({
    route: state.searchForm.route,
    id: state.result.single
})
const mapDispatchToProps = dispatch => bindActionCreators({getSingle}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SingleContent)