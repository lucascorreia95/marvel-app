import { combineReducers } from 'redux'

import SearchForm from '../components/search/SearchReducer'
import Result from '../components/resut/ResultReducer'
import Single from '../components/single/SingleReducer'

export default combineReducers({
  searchForm: SearchForm,
  result: Result,
  single: Single
})