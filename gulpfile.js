"use strict";

const gulp = require('gulp');

const tasks = require('./gulp/tasks');

tasks.forEach(function(taskPath){
  require(taskPath)();
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel(
    'html',
    'style',
    'js',
    'images',
    'fonts',
    // 'sprite',
    'webp'
  ),
  gulp.parallel(
    'watch',
    'serve'
  )
));
