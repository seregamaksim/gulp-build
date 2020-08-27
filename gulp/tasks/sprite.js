'use strict';

const path = require('path');
const normalize = require('normalize-path');
const { src, dest } = require('gulp');
const config = require('../config.json');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const mode = require('gulp-mode')();

function svgSprite() {
  return src(normalize(path.join(config.root.source, config.sprite.dev)))
    .pipe(mode.production(svgmin({
      plugins: [
        {
          removeViewBox: false
        }
      ]
    })))
    .pipe(svgstore())
    .pipe(rename('sprite.svg'))
    .pipe(dest(normalize(path.join(config.root.build, config.sprite.dist))));
}

exports.svgSprite = svgSprite;