var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    gulp.src('./*.scss')
      .pipe(sass({errLogToConsole: true}))
      .pipe(gulp.dest('./css'));
});
gulp.task('default', ['sass']);
var watcher = gulp.watch('./*.scss', ['sass']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
