'use strict';


const browserSync = require('browser-sync').create();

const config = require('../config.json');

module.exports = () => {
  function serve() {
    browserSync.init({
      open: false,
      server: {
        baseDir: config.root.build
      }
    });
    browserSync.watch([config.root.build +  '/**/*.*', '!**/*.css'], browserSync.reload);
  }
};
