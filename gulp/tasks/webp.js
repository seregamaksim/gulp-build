'use strict';

const path = require('path');
const normalize = require('normalize-path');
const { src, dest } = require('gulp');
const { reload } = require('browser-sync');
const imagemin = require('gulp-imagemin');
const webp = require('imagemin-webp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const extReplace = require("gulp-ext-replace");
const config = require('../config.json');

function imgWebp() {
  return src(normalize(path.join(config.root.source, config.webp.dev, config.webp.extension)))
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(imagemin([
      webp({
        quality: 75
      })
    ]))
    .pipe(extReplace('.webp'))
    .pipe(dest(normalize(path.join(config.root.build, config.webp.dist))))
    .pipe(reload({
      stream: true
    }));
}

exports.imgWebp = imgWebp;