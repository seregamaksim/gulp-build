'use strict';

const path = require('path');
const { watch, series } = require('gulp');
const config = require('../config.json');


module.exports = () => {
  function watchTask() {
    watch([path.join(config.root.source, config.template.folders)], series('html'));
    watch([path.join(config.root.source, config.style.folders)], series('style'));
    watch([path.join(config.root.source, config.js.folders, config.js.extension)], series('js'));
    watch([path.join(config.root.source, config.images.dev, config.images.extension)], series('images'));
    watch([path.join(config.root.source, config.fonts.extension)], series('fonts'));
  }
};
