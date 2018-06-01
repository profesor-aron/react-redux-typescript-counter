import React from 'react'

import { ICounterContainer } from './CounterInterfaces'

export const Counter = ({ count, onIncrementClick, onDecrementClick }: ICounterContainer) => (
  <div>
    <button
      id='increment'
      onClick={(e) => {
        e.preventDefault()
        onIncrementClick(1)
      }}
    >
      +
    </button>
    {count}
    <button
      id='decrement'
      onClick={(e) => {
        e.preventDefault()
        onDecrementClick(1)
      }}
    >
      -
    </button>
  </div>
)
