/*
 * action types
 */

export const ​INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

/*
 * action creators
 */

export function increment (value: number) {
  return { type: INCREMENT, value }
}

export function decrement (value: number) {
  return { type: DECREMENT, value }
}
