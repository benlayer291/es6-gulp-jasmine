'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpBabel = require('gulp-babel');

var _gulpBabel2 = _interopRequireDefault(_gulpBabel);

var _gulpJasmine = require('gulp-jasmine');

var _gulpJasmine2 = _interopRequireDefault(_gulpJasmine);

var _jasmineTerminalReporter = require('jasmine-terminal-reporter');

var _jasmineTerminalReporter2 = _interopRequireDefault(_jasmineTerminalReporter);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = _yargs2.default.argv;
var inputDir = getInputDirectory(argv);
var outputDir = getOutputDirectory(argv);

function getInputDirectory(argv) {
  console.log('INPUT', argv.input);
  return argv.input ? argv.input : '.';
}

function getOutputDirectory(argv) {
  console.log('OUTPUT', argv);
  return argv.output ? argv.output : 'babel-output';
}

_gulp2.default.task('default', ['test']);

_gulp2.default.task('scripts', function () {
  return _gulp2.default.src([inputDir + '/*.js', inputDir + '/lib/*.js']).pipe((0, _gulpBabel2.default)({
    presets: ['es2015']
  })).pipe(_gulp2.default.dest(outputDir));
});

_gulp2.default.task('test', ['scripts'], function () {
  console.log('OUTPUT DIR', outputDir);
  return _gulp2.default.src(outputDir + '/*.spec.js').pipe((0, _gulpJasmine2.default)({
    reporter: new _jasmineTerminalReporter2.default({
      isVerbose: true
    })
  }));
});