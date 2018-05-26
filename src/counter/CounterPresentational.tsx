import React from 'react'

import { INumContainer } from './CounterInterfaces'

export const Counter = ({ count, onIncrementClick, onDecrementClick }: INumContainer) => {
  return (
    <div>
      <button 
        onClick={e => {
          e.preventDefault()
          onIncrementClick(1)
        }}
      >
        +
      </button>
      {count}
      <button 
        onClick={e => {
          e.preventDefault()
          onDecrementClick(1)
        }}
      >
        -
      </button>
    </div>
  )
}
