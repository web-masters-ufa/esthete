const gulp = require('gulp')
const pug = require('gulp-pug')
const plumber = require('gulp-plumber')
const pugLinter = require('gulp-pug-linter')
const htmlValidator = require('gulp-w3c-html-validator')

module.exports = function pug2html(cb) {
  return gulp.src('src/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug())
    .pipe(htmlValidator())
    .pipe(gulp.dest('build'))
}