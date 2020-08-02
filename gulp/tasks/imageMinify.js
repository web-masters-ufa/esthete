const gulp = require('gulp')
const imageMin = require('gulp-imagemin')

module.exports = function imageMinify() {
  return gulp.src('src/img/*.{gif,png,jpg,svg,webp}')
    .pipe(imageMin([
      imageMin.gifsicle({ interlaced: true }),
      imageMin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imageMin.optipng({ optimizationLevel: 5 }),
      imageMin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('build/img'))
}
