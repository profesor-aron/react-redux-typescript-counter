/*
 * action types
 */
​
export const MORE = 'MORE'
export const MINUS = 'MINUS'

/*
 * action creators
 */

export function more (value: number) {
  return { type: MORE, num: value }
}

export function minus (value: number) {
  return { type: MINUS, num: value }
}
