/* eslint-env jasmine */
'use strict'

import FizzBuzz from './app'

describe('Fizz Buzz', () => {
  const fizzBuzz = new FizzBuzz()

  it('returns the number', () => {
    expect(fizzBuzz.checkNumber(8)).toEqual(8)
  })

  it('returns fizz if divisible by 3', () => {
    expect(fizzBuzz.checkNumber(3)).toEqual('fizz')
  })

  it('returns buzz if divisible by 5', () => {
    expect(fizzBuzz.checkNumber(5)).toEqual('buzz')
  })

  it('returns fizzbuzz if divisible by 3 and 5', () => {
    expect(fizzBuzz.checkNumber(15)).toEqual('fizzbuzz')
  })
})
