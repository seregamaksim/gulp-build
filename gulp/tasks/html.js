'use strict';

const path = require('path');
const normalize = require('normalize-path');
const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const config = require('../config.json');
// const cache = require('gulp-cached');

function html() {
  return src(normalize(path.join(config.root.source, config.template.dir)))
    // .pipe(cache('html'))
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(pug({
      pretty: true,
      // cache: true
    }))
    .pipe(dest(normalize(path.join(config.root.build))));
}

exports.html = html;