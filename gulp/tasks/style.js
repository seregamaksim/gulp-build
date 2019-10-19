'use strict';

const path = require('path');
const sass = require('gulp-sass');
const normalize = require('normalize-path');

const { src, dest } = require('gulp');
const gulpif = require('gulp-if');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const { reload } = require('browser-sync');
const concatCss = require('gulp-concat-css');
const cleanCss = require('gulp-clean-css');

const config = require('./config.json');
const mode = require('../libs/mode');


module.exports = () => {
  function style() {
    return src(
      path.join(config.root.source, config.style.dev, config.style.commons),
      path.join(config.root.source, config.style.dev, config.style.media),
      path.join(config.root.source, config.style.dev, config.style.vendor)
    )
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(gulpif(!mode.production, sourcemaps.init()))
      .pipe(postcss(require('../../postcss.config')))
      .pipe(gulpif(!mode.production, sourcemaps.write()))
      .pipe(cleanCss())
      .pipe(dest(path.join(config.root.build, config.style.dest)))
      .pipe(reload({
        stream: true
      }));
  }
}
