import { combineReducers } from 'redux'

import {
  DECREMENT,
  INCREMENT
} from './CounterActionTypes'​​

import {
  INumAction,
  INumState
} from './CounterInterfaces'

const initialState = {
  count: 0
}

export function counterReduce(state: INumState = initialState, action: INumAction) {
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
