'use strict';

const path = require('path');
const normalize = require('normalize-path');
const { src, dest } = require('gulp');
const sprite = require('gulp-svg-sprite');
const config = require('../config.json');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');

function svgSprite() {
  return src(normalize(path.join(config.root.source, config.sprite.dev)))
    .pipe(svgmin({
      plugins: [
        {
          removeViewBox: false
        }
      ]
    }))
    .pipe(svgstore())
    .pipe(rename('sprite.svg'))
    .pipe(dest(normalize(path.join(config.root.build, config.sprite.dist))));
}

exports.svgSprite = svgSprite;