const gulp = require('gulp')
const svgStore = require('gulp-svgstore')
const rename = require('gulp-rename')

module.exports = function svgSprite() {
  return gulp.src('src/img/sprite/*.svg')
    .pipe(svgStore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'))
}
