/* eslint-env jasmine */
'use strict'

import ReduxTut from './app'

describe('Redux Counter', () => {
  const reduxTut = new ReduxTut()

  it('increments the number by one', () => {
    expect(reduxTut.counter(0, {type: 'INCREMENT'})).toEqual(1)
  })

  it('decrements the number by one', () => {
    expect(reduxTut.counter(1, {type: 'DECREMENT'})).toEqual(0)
  })

  it('returns the unmodified state if type not recognised', () => {
    expect(reduxTut.counter(1, {type: 'SOMETHING'})).toEqual(1)
  })

  it('returns the initial state if state undefined', () => {
    expect(reduxTut.counter(undefined, {})).toEqual(0)
  })
})
