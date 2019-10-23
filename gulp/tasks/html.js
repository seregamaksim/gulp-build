'use strict';

const path = require('path');
const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const config = require('../config.json');

// module.exports = () => {
  function html() {
    return src(path.join(config.root.source, config.template.dir))
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(pug({
        pretty: true
      }))
      .pipe(dest(path.join(config.root.build + '/')));
  }
// };
exports.html = html;