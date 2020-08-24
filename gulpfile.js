'use strict';

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
const svgSprite = require('./gulp/tasks/sprite');
const faviconsTask = require('./gulp/tasks/favicons');

exports.default = series(
  cleanTask.clean,
  parallel(
    htmlTask.html,
    cssTask.style,
    jsTask.js,
    imagesTask.images,
    fontsTask.fonts,
    svgSprite.svgSprite,
    webpTask.imgWebp,
    faviconsTask.favicons
  ),
  parallel(serveTask.serve,
    watchTask.watchTask,)
);
exports.dev = series(
  cleanTask.clean,
  parallel(
    htmlTask.html,
    cssTask.styleDev,
    jsTask.js,
    imagesTask.images,
    fontsTask.fonts,
    svgSprite.svgSprite,
    webpTask.imgWebp,
    faviconsTask.favicons
  ),
  parallel(serveTask.serve,
    watchTask.watchTask,)
);
exports.build = series(
  cleanTask.clean,
  parallel(
    htmlTask.html,
    cssTask.style,
    jsTask.js,
    imagesTask.images,
    fontsTask.fonts,
    svgSprite.svgSprite,
    webpTask.imgWebp,
    faviconsTask.favicons
  ),
  parallel(serveTask.serve,
    watchTask.watchTask,)
);