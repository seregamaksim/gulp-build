'use strict';


const browserSync = require('browser-sync').create();
const config = require('../config.json');
const { watch } = require('gulp');
const path = require('path');
const normalize = require('normalize-path');

function serve() {
  browserSync.init({
    server: {
      baseDir: config.root.build
    }
  });
  browserSync.watch([config.root.source + '/**/*.*', '!**/*.css'], browserSync.reload);
  browserSync.watch([config.root.source + '/**/*.pug', '!**/*.html'], browserSync.reload);
  watch([normalize(path.join(config.root.build, '/*.html'))]).on('change', browserSync.reload);
}

exports.serve = serve;