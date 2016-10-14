'use strict'

class FizzBuzz {
  checkNumber (number) {
    if (number % 5 === 0 && number % 3 === 0) { return 'fizzbuzz' }
    if (number % 5 === 0) { return 'buzz' }
    if (number % 3 === 0) { return 'fizz' }
    return number
  }
}

export default FizzBuzz
