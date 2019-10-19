'use strict';

const path = require('path');

const { src, dest } = require('gulp');
const { reload } = require('browser-sync');

const config = require('../config.json');

module.exports = () => {
  function fonts() {
    return src(path.join(config.root.source, config.fonts.dev, config.fonts.extension))
      .pipe(dest(path.join(config.root.build, config.fonts.dist)))
      .pipe(reload({
        stream: true
      }));
  }
};
