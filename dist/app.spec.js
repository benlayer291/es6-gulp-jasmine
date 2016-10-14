/* eslint-env jasmine */
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Hello World', function () {
  var helloWorld = new _app2.default();

  it('says hello world', function () {
    expect(helloWorld.hello()).toEqual('Hello, World!');
  });

  it('says hello to Jack', function () {
    expect(helloWorld.hello('Jack')).toEqual('Hello, Jack!');
  });
});