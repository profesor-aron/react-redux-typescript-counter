/*
 * interface actions
 */

export interface ICounterAction {
  type: string
  value: number
}

/*
 * interface reducers
 */

export interface ICounterState {
  count?: number
}

export interface ICounterProps {
  onIncrementClick?: (value: number) => void
  onDecrementClick?: (value: number) => void
}

/*
 * interface presentational
 */

export interface ICounterContainer extends ICounterState, ICounterProps {
}
