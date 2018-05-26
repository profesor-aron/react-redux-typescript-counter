import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Counter } from './CounterPresentational'

import {
  
  increment,
     decrement
} from './CounterActions'​​

  import {
  INumContainer,
  INumState
} from './CounterInterfaces'

  const mapStateToProps = (state: INumState) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onDecrementClick: (value: number) => {
      dispatch(decrement(value))
    },
    onIncrementClick: (value: number) => {
      dispatch(increment(value))
    }
  }
}

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
