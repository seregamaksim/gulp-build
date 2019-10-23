"use strict";

const { series, parallel } = require('gulp');

const htmlTask = require('./gulp/tasks/html');
const cleanTask = require('./gulp/tasks/clean');
const fontsTask = require('./gulp/tasks/fonts');
const imagesTask = require('./gulp/tasks/images');
const jsTask = require('./gulp/tasks/script');
const serveTask = require('./gulp/tasks/serve');
const cssTask = require('./gulp/tasks/style');
const watchTask = require('./gulp/tasks/watch');
const webpTask = require('./gulp/tasks/webp');

exports.default = series(
  cleanTask.clean,
  parallel(
    htmlTask.html,
    cssTask.style,
    jsTask.js,
    imagesTask.images,
    fontsTask.fonts,
    
    // 'sprite',
    webpTask.imgWebp,
    
    
  ),
  parallel(serveTask.serve,
    watchTask.watchTask,)
);
