import { ICounterState } from './CounterInterfaces'

export const getCount = (state: ICounterState) => {
  return state.count
}
