'use strict';

const path = require('path');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const { src, dest } = require('gulp');
const normalize = require('normalize-path');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const cleanCss = require('gulp-clean-css');
const config = require('../config.json');
const sourcemaps = require('gulp-sourcemaps');

function style() {
  return src(normalize(path.join(config.root.source, config.style.folders)))
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: require('scss-resets').includePaths
    }))
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest(normalize(path.join(config.root.build, config.style.dest))))
    .pipe(rename('commons.min.css'))
    .pipe(cleanCss({compatibility: '*'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest(normalize(path.join(config.root.build, config.style.dest))));
}

function styleDev() {
  return src(normalize(path.join(config.root.source, config.style.folders)))
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: require('scss-resets').includePaths
    }))
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest(normalize(path.join(config.root.build, config.style.dest))))
    // .pipe(rename('commons.min.css'))
    // .pipe(cleanCss({compatibility: '*'}))
    // .pipe(sourcemaps.write('./maps'))
    // .pipe(dest(normalize(path.join(config.root.build, config.style.dest))));
}

exports.style = style;
exports.styleDev = styleDev;
