import { getCount } from './CounterSelectors'

describe('CounterSelector', () => {

  it('should handle the counter selector', () => {

    const expectedCount = 10

    const currentState = {
      count: expectedCount
    }

    expect(getCount(currentState)).toEqual(expectedCount)

  })

})
