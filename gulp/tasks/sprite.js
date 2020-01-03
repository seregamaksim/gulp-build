'use strict';

const path = require('path');
const normalize = require('normalize-path');
const { src, dest } = require('gulp');
const sprite = require('gulp-svg-sprite');
const config = require('../config.json');

function svgSprite() {
  return src(normalize(path.join(config.root.source, config.sprite.dev)))
    .pipe(sprite({
      shape: {
        id: {
          separator: ''
        }
      },
      mode: {
        stack: {
          sprite: '../sprite',
        }
      }
    }))
    .pipe(dest(normalize(path.join(config.root.build, config.sprite.dist))));
}

exports.svgSprite = svgSprite;