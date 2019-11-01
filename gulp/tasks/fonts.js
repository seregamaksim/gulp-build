'use strict';

const path = require('path');
const normalize = require('normalize-path');
const { src, dest } = require('gulp');
const { reload } = require('browser-sync');
const config = require('../config.json');

function fonts() {
  return src(normalize(path.join(config.root.source, config.fonts.dev, config.fonts.extension)))
    .pipe(dest(normalize(path.join(config.root.build, config.fonts.dist))))
    .pipe(reload({
      stream: true
    }));
}

exports.fonts = fonts;