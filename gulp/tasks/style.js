'use strict';

const path = require('path');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const { reload } = require('browser-sync');
const cleanCss = require('gulp-clean-css');

const config = require('../config.json');


module.exports = () => {
  function style() {
    return src(path.join(config.root.source, config.style.dev, config.style.commons))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(postcss(autoprefixer({browsers: ['last 5 version']})))
      .pipe(dest(path.join(config.root.build, config.style.dest)))
      .pipe(rename('common.min.css'))
      .pipe(cleanCss({compatibility: '*'}))
      .pipe(dest(path.join(config.root.build, config.style.dest)))
      .pipe(reload({
        stream: true
      }));
  }
}
