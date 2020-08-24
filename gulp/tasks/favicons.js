'use strict';

const path = require('path');
const normalize = require('normalize-path');
const { src, dest } = require('gulp');
const config = require('../config.json');

function favicons() {
  return src(normalize(path.join(config.root.source, config.favicons.dev)))
    .pipe(dest(normalize(path.join(config.root.build))));
}

exports.favicons = favicons;