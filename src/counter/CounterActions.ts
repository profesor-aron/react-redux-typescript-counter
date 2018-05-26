/*
 * action types
 */

export const DECREMENT = 'DECREMENT'
export const ​INCREMENT = 'INCREMENT'

/*
 * action creators
 */

export function increment(value: number) {
  return { type: INCREMENT, value }
}

export function decrement(value: number) {
  return { type: DECREMENT, value }
}
