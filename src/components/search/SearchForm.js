import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from "react-router-dom"

import './Search.css'

import { handleInputChange } from './SearchActions'

class SearchForm extends Component {

    handleInputKeyUp = e => {
        if (e.keyCode !== 13) return
        this.props.history.push('/result');
    }

    render() {
        const inputPlaceholder = `enter the name of your ${this.props.route} ...`
        return (
            <div className="search__wrapper">
                <Link to="/" className="search__go-back">go back</Link>
                <h2 className="search__title">We are looking for {this.props.route}</h2>
                <figure className="search__figure">
                    <img src={this.props.img} alt={this.props.route} />
                </figure>
                <div className="search__form">
                    <input
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}
                        placeholder={inputPlaceholder}
                        onKeyUp={this.handleInputKeyUp}
                    />
                    <Link to="/result">
                        Search
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    inputValue: state.searchForm.inputValue,
    route: state.searchForm.route,
    img: state.searchForm.img
})
const mapDispatchToProps = dispatch => bindActionCreators({handleInputChange}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm))