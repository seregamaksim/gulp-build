'use strict';

const path = require('path');
const normalize = require('normalize-path');
const { src, dest } = require('gulp');
const { reload } = require('browser-sync');
const imagemin = require('gulp-imagemin');
const config = require('../config.json');

function images() {
  return src(normalize(path.join(config.root.source, config.images.dev, config.images.extension)))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })
    ]))
    .pipe(dest(normalize(path.join(config.root.build, config.images.dist))))
    .pipe(reload({
      stream: true
    }));
}

exports.images = images;
