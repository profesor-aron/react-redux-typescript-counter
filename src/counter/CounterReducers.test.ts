import {
  DECREMENT,
  INCREMENT
} from './CounterActionTypes'

import { counterReduce } from './CounterReducers'

describe('CounterReducers', () => {

  it('should return the initial state', () => {
    const expectedState = {
      count: 0
    }
    const action = {
      type: 'INITIAL_STATE',
      value: 0
    }
    expect(counterReduce(undefined, action)).toEqual(expectedState)
  })

  it('should handle INCREMENT', () => {
    const currentState = {
      count: 1
    }
    const action = {
      type: INCREMENT,
      value: 10
    }
    const expectedState = {
      count: 11
    }
    expect(counterReduce(currentState, action)).toEqual(expectedState)
  })

  it('should handle DECREMENT', () => {
    const currentState = {
      count: 1
    }
    const action = {
      type: DECREMENT,
      value: 10
    }
    const expectedState = {
      count: -9
    }
    expect(counterReduce(currentState, action)).toEqual(expectedState)
  })

})
