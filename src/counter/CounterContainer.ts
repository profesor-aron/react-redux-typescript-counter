import { connect } from 'react-redux'

import { Counter } from './CounterPresentational'

import {
  decrement,
  increment
} from './CounterActions'

import {
  INumContainer,
  INumState
} from './CounterInterfaces'

export const CounterContainer = connect(
  (state: INumState) => ({
    count: state.count
  }),
  {
    onDecrementClick: decrement,
    onIncrementClick: increment
  }
)(Counter)
