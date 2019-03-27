import { combineReducers } from 'redux'

import SearchForm from '../components/search/SearchReducer'
import Result from '../components/resut/ResultReducer'
import Characters from '../components/characters/CharactersReducer'
import Comics from '../components/comics/ComicsReducer'

export default combineReducers({
  searchForm: SearchForm,
  result: Result,
  characters: Characters,
  comics: Comics
})