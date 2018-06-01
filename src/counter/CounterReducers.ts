import { combineReducers } from 'redux'

import {
  DECREMENT,
  INCREMENT
} from './CounterActionTypes'​​

import {
  ICounterAction,
  ICounterState
} from './CounterInterfaces'

const initialState = {
  count: 0
}

export function counterReduce(state: ICounterState = initialState, action: ICounterAction) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.value
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.value
      }
    default:
      return state
  }
}
