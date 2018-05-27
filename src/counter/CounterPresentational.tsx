import React from 'react'

import { INumContainer } from './CounterInterfaces'

export const Counter = ({ count, onIncrementClick, onDecrementClick }: INumContainer) => (
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
