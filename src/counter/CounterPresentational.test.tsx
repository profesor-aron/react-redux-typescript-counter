import { shallow } from 'enzyme'
import React from 'react'

import { Counter } from './CounterPresentational'

describe('CounterPresentational', () => {
  let wrapper: any

  const count = 10
  const mockIncrementfn = jest.fn()
  const mockDecrementfn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Counter
        count={count}
        onIncrementClick={mockIncrementfn}
        onDecrementClick={mockDecrementfn}
      />
    )
  })

  it('should handle the increment button', () => {
    wrapper.find('#increment').simulate(
      'click',
      {preventDefault() {}}
    )
    expect(mockIncrementfn.mock.calls.length).toBe(1)
  })

  it('should handle the decrement button', () => {
    wrapper.find('#decrement').simulate(
      'click',
      {preventDefault() {}}
    )
    expect(mockDecrementfn.mock.calls.length).toBe(1)
  })

})
