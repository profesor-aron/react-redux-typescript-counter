import { connect } from 'react-redux'

import { Counter } from './CounterPresentational'
import { getCount } from './CounterSelectors'

import {
  decrement,
  increment
} from './CounterActions'

import { ICounterState } from './CounterInterfaces'

export const CounterContainer = connect(
  (state: ICounterState) => ({
    count: getCount(state)
  }),
  {
    onDecrementClick: decrement,
    onIncrementClick: increment
  }
)(Counter)
