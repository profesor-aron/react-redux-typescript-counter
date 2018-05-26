export interface INumAction {
  type: string
  num: number
}

export interface INumState {
  num: number
}

export interface INumProps {
  onMoreClick (value: number): void
  onMinusClick(value: number): void
}

export interface INumContainer extends INumState, INumProps {
}
