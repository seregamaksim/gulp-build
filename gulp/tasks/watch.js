'use strict';

const path = require('path');
const normalize = require('normalize-path');
const { watch, series } = require('gulp');
const config = require('../config.json');
const htmlTask = require('./html');
const fontsTask = require('./fonts');
const imagesTask = require('./images');
const jsTask = require('./script');
const cssTask = require('./style');
const imgWebp = require('./webp');
const svgSprite = require('./sprite');

function watchTask() {
  watch([normalize(path.join(config.root.source, config.template.folders))], series(htmlTask.html));
  watch([normalize(path.join(config.root.source, config.style.folders))], series(cssTask.style));
  watch([normalize(path.join(config.root.source, config.js.folders, config.js.extension))], series(jsTask.js));
  watch([normalize(path.join(config.root.source, config.images.dev, config.images.extension))], series(imagesTask.images));
  watch([normalize(path.join(config.root.source, config.fonts.extension))], series(fontsTask.fonts));
  watch([normalize(path.join(config.root.source, config.images.dev, config.images.extension))], series(imgWebp.imgWebp));
  watch([normalize(path.join(config.root.source, config.sprite.dev))], series(svgSprite.svgSprite));
}

exports.watchTask = watchTask;