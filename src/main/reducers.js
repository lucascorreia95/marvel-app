import { combineReducers } from 'redux'

import SearchForm from '../components/search/SearchReducer'

export default combineReducers({
  searchForm: SearchForm
})