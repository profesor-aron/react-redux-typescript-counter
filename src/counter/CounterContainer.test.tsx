import React from 'react'
import { shallow } from 'enzyme'
import { createMockStore } from 'redux-test-utils'

import { shallowWithStore } from '../config/test/setupEnzyme'

import { CounterContainer } from './CounterContainer'
import { counterReduce } from './CounterReducers'

describe('CounterCountainer', () => {

  it("should handle state and actions", () => {

    const testState = {
      count: 10
    }

    const store = createMockStore(testState)
    const component = shallowWithStore(<CounterContainer />, store)

    expect(component).toBeInstanceOf(Object)

    expect(component.dive().find("#decrement").prop("onClick")).toBeInstanceOf(Function)
    expect(component.dive().find("#increment").prop("onClick")).toBeInstanceOf(Function)

    component.dive().find('#increment').simulate(
      'click',
      {preventDefault() {}}
    )

    component.dive().find('#decrement').simulate(
      'click',
      {preventDefault() {}}
    )

    expect(store.isActionDispatched({
      type: "INCREMENT",
      value: 1
    })).toBe(true)

    expect(store.isActionDispatched({
      type: "DECREMENT",
      value: 1
    })).toBe(true)

    expect(counterReduce(testState, {
      type: "DECREMENT",
      value: 1
    })).toEqual({ ...testState, count: 9 })

    expect(counterReduce(testState, {
      type: "INCREMENT",
      value: 1
    })).toEqual({ ...testState, count: 11 })

  })

})
