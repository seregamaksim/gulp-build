'use strict';


const browserSync = require('browser-sync').create();
const config = require('../config.json');

function serve() {
  browserSync.init({
    server: {
      baseDir: config.root.build
    }
  });
  browserSync.watch([config.root.source + '/**/*.*', '!**/*.css'], browserSync.reload);
}

exports.serve = serve;