import {
  DECREMENT,
  INCREMENT
} from './CounterActionTypes'

/*
 * action creators
 */

export function decrement(value: number) {
  return { type: DECREMENT, value }
}

export function increment(value: number) {
  return { type: INCREMENT, value }
}
