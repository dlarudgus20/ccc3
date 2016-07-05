var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function() {
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task('default', ['scripts']);
