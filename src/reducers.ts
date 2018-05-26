import { combineReducers } from 'redux'

import {
  MORE,
  MINUS
} from './actions'​​

import {
  INumAction
} from './interfaces'

const initialState = {
  num: 0
}

function reduce (state = initialState, action: INumAction) {
  switch (action.type) {
    case MORE:
      return Object.assign({}, state, {
        num: state.num + action.num
      })
    case MINUS:
      return Object.assign({}, state, {
        num: state.num - action.num
      })
    default:
      return state
  }
}

export default reduce
