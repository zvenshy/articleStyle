var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  gulp.src('./*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('compress', function () {
  gulp.src('./css/*.css')
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'compress']);
var watcher = gulp.watch('./*.scss', ['sass']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
