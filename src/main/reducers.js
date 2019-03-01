import { combineReducers } from 'redux'

import SearchForm from '../components/search/SearchReducer'
import Result from '../components/resut/ResultReducer'

export default combineReducers({
  searchForm: SearchForm,
  result: Result
})