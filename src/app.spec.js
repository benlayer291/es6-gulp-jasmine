/* eslint-env jasmine */
'use strict'

import HelloWorld from './app'

describe('Hello World', () => {
  const helloWorld = new HelloWorld()

  it('says hello world', () => {
    expect(helloWorld.hello()).toEqual('Hello, World!')
  })

  it('says hello to Jack', () => {
    expect(helloWorld.hello('Jack')).toEqual('Hello, Jack!')
  })
})
