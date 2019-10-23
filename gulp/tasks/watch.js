'use strict';

const path = require('path');
const { watch, series } = require('gulp');
const config = require('../config.json');
const htmlTask = require('./html');
const fontsTask = require('./fonts');
const imagesTask = require('./images');
const jsTask = require('./script');
const cssTask = require('./style');

function watchTask() {
  watch([path.join(config.root.source, config.template.folders)], series(htmlTask.html));
  watch([path.join(config.root.source, config.style.folders)], series(cssTask.style));
  watch([path.join(config.root.source, config.js.folders, config.js.extension)], series(jsTask.js));
  watch([path.join(config.root.source, config.images.dev, config.images.extension)], series(imagesTask.images));
  watch([path.join(config.root.source, config.fonts.extension)], series(fontsTask.fonts));
}

exports.watchTask = watchTask;