import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import rootReducer from './main/reducers'
import App from './main/App'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, promise)(createStore)(rootReducer, devTools)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)