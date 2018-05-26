import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { Counter } from './CounterPresentational'

import {
  increment,
  decrement
} from './CounterActions'​​

import {
  INumState,
  INumContainer
} from './CounterInterfaces'

const mapStateToProps = (state: INumState) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onIncrementClick: (value: number) => {
      dispatch(increment(value))
    },
    onDecrementClick: (value: number) => {
      dispatch(decrement(value))
    }
  }
}

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
