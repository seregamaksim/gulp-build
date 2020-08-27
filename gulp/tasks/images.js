'use strict';

const path = require('path');
const normalize = require('normalize-path');
const { src, dest } = require('gulp');
const { reload } = require('browser-sync');
const imagemin = require('gulp-imagemin');
const imageminMozJpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const changed = require('gulp-changed');
const config = require('../config.json');
const mode = require('gulp-mode')();

function images() {
  return src(normalize(path.join(config.root.source, config.images.dev, config.images.extension)))
    .pipe(changed(normalize(path.join(config.root.build, config.images.dist))))
    .pipe(mode.production(imagemin([
      imageminGifsicle({
        optimizationLevel: 3
      }),
      imageminMozJpeg({
        progressive: true,
        quality: 90
      }),
      imageminPngquant({
        speed: 5,
        quality: [0.7, 0.8]
      }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: false },
          { removeUnusedNS: false },
          { removeUselessStrokeAndFill: false },
          { cleanupIDs: false },
          { removeComments: true },
          { removeEmptyAttrs: true },
          { removeEmptyText: true },
          { collapseGroups: true }
        ]
      })
    ])))
    .pipe(dest(normalize(path.join(config.root.build, config.images.dist))))
    .pipe(reload({
      stream: true
    }));
}

exports.images = images;
