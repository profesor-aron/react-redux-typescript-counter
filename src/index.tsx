import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, Dispatch } from 'redux'
import { connect, Provider } from 'react-redux'

import reduce from './reducers'

import {
  more,
  minus
} from './actions'​​

import {
  INumState,
  INumContainer
} from './interfaces'

const mapStateToProps = (state: INumState) => {
  return {
    num: state.num
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onMoreClick: (value: number) => {
      dispatch(more(value))
    },
    onMinusClick: (value: number) => {
      dispatch(minus(value))
    }
  }
}

const MoreMinus = ({ num, onMoreClick, onMinusClick }: INumContainer) => {
  return (
    <div>
      <button 
        onClick={e => {
          e.preventDefault()
          onMoreClick(1)
        }}
      >
        +
      </button>
      {num}
      <button 
        onClick={e => {
          e.preventDefault()
          onMinusClick(1)
        }}
      >
        -
      </button>
    </div>
  )
}

const MoreMinusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreMinus)

const App = () => {
  return (
    <div>
      <MoreMinusContainer />
    </div>
    )
}

const store = createStore(
  reduce
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
