import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { CounterContainer } from './counter/CounterContainer'
import { counterReduce } from './counter/CounterReducers'

const App = () => {
  return (
    <CounterContainer />
  )
}

const store = createStore(
  counterReduce
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
