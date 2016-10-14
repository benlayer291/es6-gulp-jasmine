'use strict'

import gulp from 'gulp'
import babel from 'gulp-babel'
import jasmine from 'gulp-jasmine'
import Reporters from 'jasmine-terminal-reporter'

gulp.task('default', ['test'])

gulp.task('scripts', () => {
  return gulp.src('src/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('test', ['scripts'], () => {
  return gulp.src('dist/*.spec.js')
  .pipe(jasmine({
    reporter: new Reporters({
      isVerbose: true
    })
  }))
})
