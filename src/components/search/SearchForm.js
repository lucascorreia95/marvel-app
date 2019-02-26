import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { handleInputChange, handleSubmit } from './SearchActions'

import ironman from '../../assets/img/iron-man.png'

class SearchForm extends Component {
    render() {
        return (
            <div className="search__wrapper">
                <img src={ironman} alt="GoTwitter" />
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}
                        placeholder={this.props.placeholder}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({inputValue: state.searchForm.inputValue})
const mapDispatchToProps = dispatch => bindActionCreators({handleInputChange, handleSubmit}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)