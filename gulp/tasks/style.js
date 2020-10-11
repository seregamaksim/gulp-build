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
const mode = require('gulp-mode')();
const shorthand = require('gulp-shorthand');
// const cache = require('gulp-cached');

function style() {
  return src(normalize(path.join(config.root.source, config.style.folders)))
    // .pipe(cache('linting'))
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass({
      includePaths: require('scss-resets').includePaths
    }))
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(postcss([autoprefixer()]))
    .pipe(mode.development(sourcemaps.write('./maps')))
    .pipe(mode.production(shorthand()))
    .pipe(dest(normalize(path.join(config.root.build, config.style.dest))))
    .pipe(rename('commons.min.css'))
    .pipe(mode.production(cleanCss({compatibility: '*'})))
    .pipe(mode.production(shorthand()))
    .pipe(dest(normalize(path.join(config.root.build, config.style.dest))));
}


exports.style = style;
