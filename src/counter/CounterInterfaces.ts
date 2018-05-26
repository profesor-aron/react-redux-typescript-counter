/*
 * interface actions
 */

export interface INumAction {
  type: string
  value: number
}

/*
 * interface reducers
 */

export interface INumState {
  count: number
}

export interface INumProps {
  onIncrementClick (value: number): void
  onDecrementClick(value: number): void
}

/*
 * interface presentational
 */

export interface INumContainer extends INumState, INumProps {
}
