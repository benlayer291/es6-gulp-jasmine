/* eslint-env jasmine */
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Fizz Buzz', function () {
  var fizzBuzz = new _app2.default();

  it('returns the number', function () {
    expect(fizzBuzz.checkNumber(8)).toEqual(8);
  });

  it('returns fizz if divisible by 3', function () {
    expect(fizzBuzz.checkNumber(3)).toEqual('fizz');
  });

  it('returns buzz if divisible by 5', function () {
    expect(fizzBuzz.checkNumber(5)).toEqual('buzz');
  });

  it('returns fizzbuzz if divisible by 3 and 5', function () {
    expect(fizzBuzz.checkNumber(15)).toEqual('fizzbuzz');
  });
});