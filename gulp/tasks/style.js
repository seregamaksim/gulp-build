'use strict';

const path = require('path');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const { reload } = require('browser-sync');
const cleanCss = require('gulp-clean-css');

const config = require('../config.json');


function style() {
  return src(path.join(config.root.source, config.style.dev, config.style.commons))
    .pipe(sass())
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest(path.join(config.root.build, config.style.dest)))
    .pipe(rename('common.min.css'))
    .pipe(cleanCss({compatibility: '*'}))
    .pipe(dest(path.join(config.root.build, config.style.dest)))
    .pipe(reload({
      stream: true
    }));
}

exports.style = style;
