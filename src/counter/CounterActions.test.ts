import { Counter } from './CounterPresentational'

import {
  DECREMENT,
  INCREMENT
} from './CounterActionTypes'

import {
  decrement,
  increment
} from './CounterActions'

describe('CounterActions', () => {

  it('should create an action to increment the counter', () => {
    const value = 1
    const expectedAction = {
      type: INCREMENT,
      value
    }
    expect(increment(value)).toEqual(expectedAction)
  })

  it('should create an action to decrement the counter', () => {
    const value = 1
    const expectedAction = {
      type: DECREMENT,
      value
    }
    expect(decrement(value)).toEqual(expectedAction)
  })

})
